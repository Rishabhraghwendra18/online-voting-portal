import axios from "axios";

const baseUrl = ' http://localhost:8080';

const addVoter = (payload)=>{
    return axios.post(`${baseUrl}/addVoter`,payload);
}
const checkVoter = (payload)=>{
    return axios.post(`${baseUrl}/voter`,payload);
}
const castVote = (payload)=>{
    return axios.post(`${baseUrl}/votes`,payload)
}

export{
    addVoter,
    checkVoter,
    castVote
}