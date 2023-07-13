import { useRef, useState, useEffect} from 'react';
import DisplayTrack from './DisplayTrack/DisplayTrack';
import ProgressBar from './ProgressBar/ProgressBar';
import styles from './musicPlayer.module.css';
import Controls from './Controls/Controls';
import { connect } from "react-redux";


const MusicPlayer = (props)=>{
    const [currentTrack, setCurrentTrack] = useState(props?.data?.filter?.currentSong?.url);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef();
    const progressBarRef = useRef();
    // console.log("this is a ref =  ", audioRef);

    return(
        <div className={styles.main}>
            <div className={styles.player}>
                <DisplayTrack 
                    currentTrack={currentTrack}
                    audioRef={audioRef}
                    setDuration={setDuration}
                    progressBarRef={progressBarRef}/>
            
                <ProgressBar 
                    progressBarRef={progressBarRef}
                    audioRef={audioRef}
                    timeProgress={timeProgress}
                    duration={duration}/>

                <Controls audioRef={audioRef}
                    progressBarRef={progressBarRef}
                    setTimeProgress={setTimeProgress}
                    duration={duration}/>

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
    connect(mapStateToProps)(MusicPlayer)
  );
