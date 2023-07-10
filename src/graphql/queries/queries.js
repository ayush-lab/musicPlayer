import { gql } from 'graphql-request'

export const GET_SONGS = gql`
query ($playlistId: Int!) {
    getSongs(playlistId: $playlistId) {
      _id
      artist
      photo
      duration
      title
      url
    }
  } `;
