import { useState, useEffect, useCallback, useRef} from 'react';
import styles from './controls.module.css';
import Menu from '../../../../assets/images/menu.png';
import Pause from '../../../../assets/images/pause.png';
import Next from '../../../../assets/images/next.png';
import Prev from '../../../../assets/images/prev.png';
import Sound from '../../../../assets/images/sound.png';
import Play from '../../../../assets/images/play.svg';



const Controls=({audioRef,setTimeProgress,progressBarRef,duration})=>{
    const [isPlaying, setIsPlaying] = useState(false)
    const playAnimationRef = useRef()

    const repeat = useCallback(() => {
        console.log('run');
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / duration) * 100}%`
          );
        playAnimationRef.current = requestAnimationFrame(repeat);
      },[audioRef, duration, progressBarRef, setTimeProgress]);

    const togglePlayPause = () => {
        setIsPlaying((prevState) => !prevState);
      };

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
      }, [isPlaying, audioRef, repeat]);

    return(
            <div className={styles.controls_wrapper}>
                <div className={styles.controls}>
                    <div className={styles.menu}>
                        <img src={Menu} alt={"menu"}/>
                    </div>

                    <div className={styles.player}>

                        <div className={styles.prev}>
                            <img src={Prev} alt={"prev"}/>
                        </div>
                        
                        <div className={styles.pause} onClick={togglePlayPause}>
                             <img src={isPlaying ? Play : Pause} alt={"pause"}/>
                        </div>

                        <div className={styles.next}>
                            <img src={Next} alt={"next"}/>
                        </div>
                    </div>

                    <div className={styles.sound}>
                        <div className={styles.soundIcon}>
                            <img src={Sound} alt={"sound"}/>
                        </div>
                    </div>

                </div>
            </div>
        )
}

export default Controls;