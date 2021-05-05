import axios from 'axios';

export function getUserDetails() {
    return axios.get('/auth', {
        withCredentials: true
    })
}