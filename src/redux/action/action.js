import { GET_SONGS } from "../../graphql/queries/queries";
import { request, GraphQLClient } from 'graphql-request';


export const clearData = () => {
    return{
      type: 'CLEAR_DATA',
      data: []
    }
}

export const selectCurrentSong = (index) => {
  return{
    type: 'SELECT_CURRENT_SONG',
    data: index
  }
}

export const redirectRoute = (path) => {
  return{
    type: 'REDIRECT_PATH',
    data: path
  }
}

export const restart = (value) => {
  return{
    type: 'RESTART_SONG',
    data: value
  }
}




export const getSongs = (playlistId) => {

    // const endpoint = "https://api.ss.dev/resource/api"
    const endpoint = process.env.REACT_APP_GRAPHQL_BASE_URL
    const client = new GraphQLClient(endpoint, {
        headers: {
            // "Authorization": `Token ${token}`,
            'Content-Type': 'application/json',
        },
    });

    const query = GET_SONGS;

    let variables = 
        {
            "playlistId": playlistId
        };
  
    return async (dispatch) => {
        await client.request(query, variables)
        .then((response) => {

            console.log("data received = ", response);
            dispatch({
              type: "GET_ALL_SONGS",
              payload: response?.getSongs            ,
            });

      })
        .catch(async (error) => {
            console.log("err",error)
            dispatch();
            return error;
        });
    } 
}



  // Async calls using redux thunks 

 


// export const fetchAsyncPreferenceCourse = (CourseLink,data) => {
//     return (dispatch) => {
//       console.log('Sending Request!');
//       AuthServices.PreferenceCourse(CourseLink,data)
//         .then((res)=>{
//           console.log(res);
//           dispatch(PreferenceCourse(res.data.course))
//         })
//         .catch((err)=>{
//           console.log(err);
//         })
//     }
//   }