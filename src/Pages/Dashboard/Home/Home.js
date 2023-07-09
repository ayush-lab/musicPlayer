import styles from './home.module.css';
import SearchBar from '../../../Components/SearchBar/Searchbar';
import SongBar from '../../../Components/SongBar/SongBar';

const Home = ()=>{
    return(
        <div className={styles.home}>
            <h2 className={styles.heading}>For you</h2>
            <SearchBar/>
            {[1,2,3,4,5,6,7].map((item)=>{
                return <SongBar/>
            })}
        </div>
    )
}

export default Home
