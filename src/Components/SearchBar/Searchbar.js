import styles from './SearchBar.module.css';
import SearchIcon from './../../assets/images/searchIcon.svg';


const SearchBar = ()=>{
    return (<div className={styles.search}>
                <input className={styles.searchBar} placeholder={"Search Song, Artist"}/>
                <div className={styles.searchIcon}>
                    <img src={SearchIcon} alt="searchIcon"/>
                </div>
           </div>)
}

export default SearchBar