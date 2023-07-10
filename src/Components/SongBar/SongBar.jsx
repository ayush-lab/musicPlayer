import styles from './songBar.module.css';
import { connect, useDispatch } from "react-redux";
import { selectCurrentSong } from '../../redux/action/action';


const SongBar = ({artist,title,url,duration,photo,_id,active})=>{
    const durationStr = duration.toString()  // 401
    const durationFormat = durationStr[0] + ":" + durationStr[1] + durationStr[2];
    
    const dispatch = useDispatch();

    const selectCurrentSongHandler=()=>{
        const currentSong = {
            artist:artist,
            _id:_id,
            title:title,
            url:url,
            duration:duration,
            photo:photo
        }
        dispatch(selectCurrentSong(currentSong))
    }

    return(
        <div className={styles.bar} 
             onClick={selectCurrentSongHandler} 
             style={active? {background:"#3b3b3b"} :null}>
                
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
