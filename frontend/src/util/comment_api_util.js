import axios from 'axios';

export const fetchPinComments = pinId =>{
  return axios.get(`/api/comments/${pinId}`)
};

export const createComment = data => {
  return axios.post(`/api/comments/`,data)
}

export const updateComment = data => {
  return axios.patch(`/api/comments/${data.id}`, data)
}

export const deleteComment = id => {
  // debugger
  return axios.delete(`/api/comments/${id}`)
}
