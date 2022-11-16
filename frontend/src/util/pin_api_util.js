import axios from 'axios';

export const fetchPins = () =>{
  return axios.get('/api/pins')
};

export const fetchPin = id => {
  return axios.get(`/api/pins/${id}`)
}

export const fetchUserPin = userId =>{
  return axios.get(`/api/pins/user/${userId}`)
};

export const createPin = data => {
  // console.log(data)
  return axios.post(`/api/pins/user/${data.user}`, data)
}

export const updatePin = data => {
  return axios.patch(`/api/pins/${data.id}`, data)
}

export const deletePin = id => {
  // debugger
  return axios.delete(`/api/pins/${id}`)
}
