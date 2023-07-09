import styles from './songBar.module.css';
import StarBoy from '../../assets/images/starBoy.svg';

const SongBar = ({artistName,songName,image,time})=>{
    return(
        <div className={styles.bar}>
            <div className={styles.artist_detail}>
                <div className={styles.artist_pic}>
                    <img src={StarBoy} alt={"weekend"}/>
                </div>
                <div className={styles.artist_name}>
                    <h3></h3>
                    <p>The Weekend</p>
                </div>
            </div>

            <div className={styles.song_time}>
                <p> 4:16 </p>
            </div>
        </div>
    )
}

export default SongBar
