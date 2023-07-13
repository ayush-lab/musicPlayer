import styles from './dashboard.module.css';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import Home from './Home/Home';
import Favorites from '../Favorites/favorite';
import History from '../History/History';
import { connect, useDispatch } from "react-redux";


const Dashboard = (props)=>{
    const path = props?.data?.filter?.path;
        return (
        <div className={styles.main}>

                    <div className={styles.main_home}>
                        {path === "/" ? <Home/> : [path === "/favorites"  ? <Favorites/> : <History/>] }
                    </div>

                    <div className={styles.main_musicPlayer}>
                        <MusicPlayer/>
                    </div>

            </div>
)}


const mapStateToProps = (state, props) => {
    return {
      data: state
    };
  };
  

export default (
    connect(mapStateToProps)(Dashboard)
  );

