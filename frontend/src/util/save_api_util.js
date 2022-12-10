import axios from 'axios';

export const createSave = data => {
  return axios.post(`/api/saves/`,data)
}

export const fetchSave = () =>{
  return axios.get('/api/saves')
};

export const fetchSaves = boardId => {
  // console.log("boardId")
  return axios.get(`/api/saves/boards/${boardId}`)
}

export const fetchSavesIDwithBoardID = boardId => {
  // console.log("boardId")
  return axios.get(`/api/saves/fetchSavesIDwithBoardID/${boardId}`)
}


export const fetchSavesWithLimitFive = boardId => {
  // console.log("boardId")
  return axios.get(`/api/saves/fetchSavesWithLimitFive/${boardId}`)
}

export const deleteSave = (saveId) => {
  return axios.delete(`/api/saves/${saveId}`)
}


export const deleteSaveWithPinid = (pinID) => {
  return axios.delete(`/api/saves/board/${pinID}`)
}


