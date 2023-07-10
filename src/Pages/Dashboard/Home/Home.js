import styles from './home.module.css';
import SearchBar from '../../../Components/SearchBar/Searchbar';
import SongBar from '../../../Components/SongBar/SongBar';
import { getSongs, clearData, selectCurrentSong} from '../../../redux/action/action';
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';


const artists = [
    {artistName:"The Weekend"}
]

const Home = (props)=>{

    const dispatch = useDispatch();
    // const [songs,setSongs] = useState([]);

    useEffect(()=>{
        dispatch(getSongs(1)).then(props.data.filter.songs? dispatch(selectCurrentSong(props.data.filter.songs[0])) : null)


        console.log(props.data.filter)
        return ()=>{
            console.log("clearing the data")
        }

    },[])

    
    return(
        <div className={styles.home}>
            <div className={styles.homeWrapper}>
                <div className={styles.homeNav}>
                    <h2 className={styles.heading}>For you</h2>
                </div>
                <SearchBar/>
                {props.data.filter.songs.map((item,index)=>{
                    return <SongBar
                                active={props.data.filter?.currentSong?._id === item._id ? true : false}
                                key={item._id} 
                                _id={item._id}
                                artist={item.artist}
                                title={item.title}
                                duration={item.duration}
                                url={item.url}
                                photo={item.photo}/>
                })}
                </div>
    
            </div>
            
)}

const mapStateToProps = (state, props) => {
    return {
      data: state
    };
  };
  

export default (
    connect(mapStateToProps)(Home)
  );

