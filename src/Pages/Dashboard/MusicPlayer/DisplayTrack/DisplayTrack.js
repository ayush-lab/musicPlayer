import { useEffect } from 'react';
import styles from './displayTrack.module.css';
import { restart } from '../../../../redux/action/action';
import { connect, useDispatch } from "react-redux";

const DisplayTrack =(props)=>{
    const currentSong = props?.data?.filter?.currentSong
    const restartSong = props?.data?.filter?.restart

    const dispatch = useDispatch()

    console.log("current song: " + currentSong)

    const MetaDataHandler = () => {
        console.log(props.audioRef.current.duration);
        const totalTime = props.audioRef.current.duration;
        props.setDuration(totalTime);
        props.progressBarRef.current.max = totalTime;
      };

    useEffect(()=>{
      props.audioRef.current.currentTime = 0;
      dispatch(restart(false))

    },[restartSong])
    
      
    return(
            <div className={styles.displayTrack}>
                <div className={styles.displayDetails}>
                    <h2>{currentSong?.title}</h2>
                    <p>{currentSong?.artist}</p>
                </div>
                <div className={styles.picture}>
                    <img src={currentSong?.photo} alt={currentSong?.title}/>
                </div>
                <audio 
                    src={currentSong?.url}
                    ref={props.audioRef}
                    onLoadedMetadata={MetaDataHandler}
                     />
            </div>
        )
}


const mapStateToProps = (state, props) => {
    return {
      data: state
    };
  };
  

export default (
    connect(mapStateToProps)(DisplayTrack)
  );
