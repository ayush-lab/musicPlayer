import styles from './SearchBar.module.css';
import SearchIcon from './../../assets/images/searchIcon.svg';
import { useState } from 'react';


const SearchBar = ()=>{
    const [searchValue,setSearchValue] = useState("");

    const handleClick =(event)=>{
        setSearchValue(event.target.value);
    }


    return (<div className={styles.search}>
                <input className={styles.searchBar} 
                       placeholder={"Search Song, Artist"}
                       onChange={handleClick}
                       value={searchValue}/>

                <div className={styles.searchIcon}>
                    <img src={SearchIcon} alt="searchIcon"/>
                </div>
           </div>)
}

export default SearchBar