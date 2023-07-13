import styles from './songBar.module.css';
import { connect, useDispatch } from "react-redux";
import { restart, selectCurrentSong } from '../../redux/action/action';


const SongBar = ({artist,title,url,duration,photo,_id,active,index})=>{
    const durationStr = duration.toString()  // 401
    const durationFormat = durationStr[0] + ":" + durationStr[1] + durationStr[2];
    
    const dispatch = useDispatch();

    const selectCurrentSongHandler=()=>{
        // const currentSong = {
        //     artist:artist,
        //     _id:_id,
        //     title:title,
        //     url:url,
        //     duration:duration,
        //     photo:photo
        // }
        console.log("currentSong indx : " + index);
        dispatch(selectCurrentSong(index))
        dispatch(restart(true));
    }

    return(
        <div className={styles.bar} 
             onClick={selectCurrentSongHandler} 
             style={active? {background:"rgba(255, 255, 255, 0.08)"} :null}>
                
            <div className={styles.artist_detail}>
                <div className={styles.artist_pic}>
                    <img src={photo} alt={artist}/>
                </div>
                <div className={styles.artist_name}>
                    <h3>{title}</h3>
                    <p>{artist}</p>
                </div>
            </div>

            <div className={styles.song_time}>
                <p>{durationFormat}</p>
            </div>
        </div>
    )
}

export default SongBar
