import axios from 'axios';

export const createSave = data => {
  return axios.post(`/api/saves/`,data)
}

export const fetchSave = () =>{
  return axios.get('/api/saves')
};

export const fetchSaves = boardId => {
  return axios.get(`/api/saves/${boardId}`)
}

export const deleteSave = (array) => {
  return axios.delete(`/api/saves/${array}`)
}


