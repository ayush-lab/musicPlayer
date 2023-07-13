import { useEffect } from 'react';
import styles from './displayTrack.module.css';
import { restart } from '../../../../redux/action/action';
import { connect, useDispatch } from "react-redux";
import { ThreeDots } from 'react-loader-spinner'


const DisplayTrack =(props)=>{
    const currentSong = props?.data?.filter?.currentSong
    const restartSong = props?.data?.filter?.restart

    const dispatch = useDispatch()


    const MetaDataHandler = () => {
        // console.log(props.audioRef.current.duration);
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
                    {Object.keys(currentSong).length===0 ? <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
                      <ThreeDots 
                          height="80" 
                          width="80" 
                          radius="9"
                          color="#4fa94d" 
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{}}
                          wrapperClassName=""
                          visible={true}
                          /></div> : <img src={currentSong?.photo} alt={currentSong?.title}/>}
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
