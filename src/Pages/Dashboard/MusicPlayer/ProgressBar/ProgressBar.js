import styles from './progressBar.module.css';


const ProgressBar = ({progressBarRef,audioRef,timeProgress,duration}) => {

    const handleProgressBar = ()=>{
        audioRef.current.currentTime = progressBarRef.current.value;
        console.log(progressBarRef.current.value);
    }

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
      };

    return (
      <div className={styles.progress}>
        <span className={styles.start}>{formatTime(timeProgress)}</span>
        <input type="range" 
               ref={progressBarRef}
               onChange={handleProgressBar} />
        <span className={styles.end}>{formatTime(duration)}</span>
      </div>
    );
  };
  
  export default ProgressBar;