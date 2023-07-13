import styles from './progressBar.module.css';


const ProgressBar = ({progressBarRef,audioRef,timeProgress,duration}) => {

    const handleProgressBar = ()=>{
        audioRef.current.currentTime = progressBarRef.current.value;
        // console.log(progressBarRef.current.value);
    }

    

    return (
      <div className={styles.progress}>
        <input type="range" 
               className={styles.progressInput}
               ref={progressBarRef}
               onChange={handleProgressBar} />
      </div>
    );
  };
  
  export default ProgressBar;