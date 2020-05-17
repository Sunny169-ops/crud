import {FETCH_DATA} from './Constants';
import {POST_DATA} from './Constants';
import {DELETE_DATA} from './Constants';
import {GET_USER} from './Constants';
import {UPDATE_DATA} from './Constants';



 export const fetchData = ( data) => {
    return{
        type : FETCH_DATA,
        payload : data 
    }   
}

export const postData = (data) => {
    return {
        type : POST_DATA,
        payload : {
            id : data.id,
            name : data.name,
            username : data.username,
            email : data.email
        }
    }
}

export const getS = (data) => {
    return {
        type : GET_USER,
        payload : data
    }
}

export const update = (data) => {
    return {
        type : UPDATE_DATA,
        payload : {
            id : data.id,
            name : data.name,
            username : data.username,
            email : data.email
        }
    }
}

export const deleteData = (id) => {
    return {
        type : DELETE_DATA,
        payload : id 
        
    }
}