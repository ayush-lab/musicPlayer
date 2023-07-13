
const initialState = {
    songs:[],
    currentSong :{},
    currentIndex:0,
    path:"/",
    restart:false,
    // backgroundColor:"linear-gradient(108.18deg, #201606 2.46%, #000000 99.84%)"
  };
  
  const reducer = (state = initialState, action) => {
   
    switch (action.type) {
      case "GET_ALL_SONGS":
        var ind=0;
        action.payload.forEach(song=>{
          song.index = ind;
          ind++;
        })

        return {
          ...state,
          songs: action.payload,
          currentSong:action.payload[state.currentIndex],
        };
  
        case "CLEAR_DATA":
        return {
          ...state,
          songs: [],
        };

        case "REDIRECT_PATH":
        console.log("REDIRECT_PATH",action.data);
        return {
          ...state,
          path:action.data
        }
  
        case "SELECT_CURRENT_SONG":

          return {
            ...state,
            currentIndex:action.data,
            currentSong:state.songs[action.data]
          }
  
        case "RESTART_SONG":
          console.log("RESTART_SONG",action.data);

          return {
            ...state,
           restart:action.data
          }
  
          
      default:
        return state;
    }
  };
  
  export default reducer;