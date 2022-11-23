import axios from 'axios';

export const createBoard = data => {
  return axios.post(`/api/boards/`,data)
}




