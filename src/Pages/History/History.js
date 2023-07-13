import styles from './History.module.css'
import {connect} from 'react-redux'

const History=(props)=>{
    return(
        <div className={styles.history}>
            <h1 style={{color:"white", fontFamily:"BasierCircle"}}>
                {props?.data?.filter?.path === "/history" ? "History": "Top Tracks"}
            </h1>
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
      data: state
    };
  };
  

export default (
    connect(mapStateToProps)(History)
  );
