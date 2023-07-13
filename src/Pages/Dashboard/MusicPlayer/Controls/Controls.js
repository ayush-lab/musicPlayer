import { useState, useEffect, useCallback, useRef} from 'react';
import styles from './controls.module.css';
import { connect, useDispatch } from "react-redux";
import Menu from '../../../../assets/images/menu.png';
import Pause from '../../../../assets/images/pause.png';
import Next from '../../../../assets/images/next.png';
import Prev from '../../../../assets/images/prev.png';
import Sound from '../../../../assets/images/sound.png';
import Play from '../../../../assets/images/play.svg';
import Unmute from '../../../../assets/images/unmute.svg';
import { restart, selectCurrentSong } from '../../../../redux/action/action';



const Controls=(props)=>{
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMute,setMute] = useState(false)
    const dispatch = useDispatch();
    const playAnimationRef = useRef()
    const audioRef=props.audioRef;
    const setTimeProgress = props.setTimeProgress
    const progressBarRef=props.progressBarRef
    const duration=props.duration

    const repeat = useCallback(() => {
        const currentTime = audioRef?.current?.currentTime;
        setTimeProgress(currentTime);
        if(progressBarRef?.current?.value) progressBarRef.current.value=currentTime;
        progressBarRef?.current?.style.setProperty(
            '--range-progress',
            `${(progressBarRef?.current?.value / duration) * 100}%`
          );
        playAnimationRef.current = requestAnimationFrame(repeat);
      },[audioRef, duration, progressBarRef, setTimeProgress]);

    const togglePlayPause = () => {
        setIsPlaying((prevState) => !prevState);
      };

    const nextTrackHandler = () =>{
        const currentIndex = props?.data?.filter?.currentIndex;
        const songsCount = props?.data?.filter?.songs.length;
        if(currentIndex === songsCount -1 ){
            dispatch(selectCurrentSong(0));
        }
        else {
          dispatch(selectCurrentSong(currentIndex+1));
        }
        dispatch(restart(true))

    }

    const PrevTrackHandler = () =>{
        const currentIndex = props?.data?.filter?.currentIndex;
        const songsCount = props?.data?.filter?.songs.length;
        if(currentIndex === 0){
            dispatch(selectCurrentSong(songsCount-1));
        }
        else dispatch(selectCurrentSong(currentIndex-1));

        dispatch(restart(true))

    }

    const muteHandler=()=>{
        if(audioRef.current.volume === 0){
          audioRef.current.volume = 1;
        }
        else audioRef.current.volume = 0;
        
        setMute((prev)=>!prev);
    }

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

                        <div className={styles.prev} onClick={PrevTrackHandler}>
                            <img src={Prev} alt={"prev"}/>
                        </div>
                        
                        <div className={styles.pause} onClick={togglePlayPause}>
                             <img src={isPlaying ? Play : Pause} alt={"pause"}/>
                        </div>

                        <div className={styles.next} onClick={nextTrackHandler}>
                            <img src={Next} alt={"next"}/>
                        </div>
                    </div>

                    <div className={styles.sound} onClick={muteHandler}>
                        <div className={styles.soundIcon}>
                            <img src={isMute ? Unmute : Sound} alt={"sound"}/>
                        </div>
                    </div>

                </div>
            </div>
        )
}

const mapStateToProps = (state, props) => {
    return {
      data: state
    };
  };
  

export default (
    connect(mapStateToProps)(Controls)
  );
