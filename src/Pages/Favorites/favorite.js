import MusicPlayer from "../Dashboard/MusicPlayer/MusicPlayer"
import styles from "./favorite.module.css"

const Favorites=()=>{
    return(
        <div className={styles.favorite}>
            <h1 style={{color:"white", fontFamily:"BasierCircle"}}>Favorites</h1>
        </div>
    )
}
export default Favorites