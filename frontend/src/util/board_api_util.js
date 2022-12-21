import axios from 'axios';

export const createBoard = data => {
    console.log("creating board utils")
  return axios.post(`/api/boards/`,data)
}

export const fetchDefaultBoard = userId =>{
  return axios.get(`/api/boards/user/${userId}`)
};

export const fetchBoards = userId =>{
  return axios.get(`/api/boards/user/all/${userId}`)
};

export const deleteBoard = id => {
  // debugger
  return axios.delete(`/api/boards/${id}`)
}