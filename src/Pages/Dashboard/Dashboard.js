import styles from './dashboard.module.css';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import Home from './Home/Home';

const Dashboard = ()=>{
    return (<div className={styles.main}>

                <div className={styles.main_home}>
                    <Home/>
                </div>

                <div className={styles.main_musicPlayer}>
                    <MusicPlayer/>
                </div>

        </div>
)}

export default Dashboard