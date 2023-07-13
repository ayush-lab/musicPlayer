import styles from './home.module.css';
import SearchBar from '../../../Components/SearchBar/Searchbar';
import SongBar from '../../../Components/SongBar/SongBar';
import { getSongs} from '../../../redux/action/action';
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner'


const Home = (props)=>{

    const dispatch = useDispatch();
    const [query,setQuery] = useState("")
    // const [songs,setSongs] = useState([]);

    useEffect(()=>{
        dispatch(getSongs(1))

        // console.log(props.data.filter)

    },[])

    var songs = props?.data?.filter?.songs;

    
    return(
        <div className={styles.home}>
            <div className={styles.homeWrapper}>
                <div className={styles.homeNav}>
                    <h2 className={styles.heading}>For you</h2>
                </div>
                <SearchBar setQuery={setQuery} query={query}/>
                <div className={styles.songbars}>
                    {songs.length===0 ? <div className={styles.loader}><Audio
                        height="50"
                        width="50"
                        radius="9"
                        color="green"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    /></div>
                    : songs.filter(song=>{
                        if( query === ' ') return song;
                        else if( song.title.toLowerCase().includes(query.toLowerCase()) ||
                                song.artist.toLowerCase().includes(query.toLowerCase()) ) return song;
                    }).map((item,index)=>{
                        return <SongBar
                                    active={props.data.filter?.currentSong?._id === item._id ? true : false}
                                    index={item.index}
                                    key={item._id} 
                                    _id={item._id}
                                    artist={item.artist}
                                    title={item.title}
                                    duration={item.duration}
                                    url={item.url}
                                    photo={item.photo}/>
                    })}
                </div>
                </div>
    
            </div>
            
)}

const mapStateToProps = (state, props) => {
    return {
      data: state
    };
  };
  

export default (
    connect(mapStateToProps)(Home)
  );

