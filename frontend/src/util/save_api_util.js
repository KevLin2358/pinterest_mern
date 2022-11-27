import axios from 'axios';

export const createSave = data => {
  return axios.post(`/api/saves/`,data)
}



