import axios from "axios";

const baseUrl = ' http://localhost:8080';

const addVoter = (payload)=>{
    return axios.post(`${baseUrl}/addvoter`,payload);
}
const checkVoter = (payload)=>{
    return axios.post(`${baseUrl}/voter`,payload);
}
const castVote = (payload)=>{
    return axios.post(`${baseUrl}/votes`,payload)
}
const getParties = ()=>{
    return axios.get(`${baseUrl}/votes`);
}

export{
    addVoter,
    checkVoter,
    castVote,
    getParties
}