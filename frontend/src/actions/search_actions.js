import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCHS = 'RECEIVE_PIN_SEARCHS'; // all pins homepage all

export const receiveSearchs = search => {
  return({
    type: RECEIVE_SEARCHS,
    search
  })
}

export const receivePinsFromSearch = searchTerm => dispatch =>{
    // console.log("fetching one")
    return SearchApiUtil.fetchSearch(searchTerm)
      .then(search => dispatch(receiveSearchs(search)));
  }

// export const receiveSaves = saves =>{
//   return({
//     type: RECEIVE_SAVES,
//     saves
//   })
// }