
const initialState = {
    songs:[],
    currentSong :{}
  };
  
  const reducer = (state = initialState, action) => {
   
    switch (action.type) {
      case "GET_ALL_SONGS":
        return {
          ...state,
          songs: action.payload,
        };
  
        case "CLEAR_DATA":
        return {
          ...state,
          songs: [],
        };
  
        case "SELECT_CURRENT_SONG":
        console.log(action.data)

          return {
            ...state,
            currentSong:action.data
          }
  
      default:
        return state;
    }
  };
  
  export default reducer;