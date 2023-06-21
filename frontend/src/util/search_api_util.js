import axios from 'axios';

export const fetchSearch = searchTerm => {
    console.log("fetchSearch")
    return axios.get(`/api/search/${searchTerm}`)
}