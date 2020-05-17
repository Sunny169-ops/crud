import axios from 'axios'; 
import {fetchData} from './Actions';
import {postData} from './Actions';
import {deleteData} from './Actions';
import {getS} from './Actions';
import {update} from './Actions';

// import { history} from './History'

                     

const apiUrl = 'http://localhost:3003/users';                     

export const getData =  () => {                                   
  return (dispatch) => {
    return axios.get(`${apiUrl}`)                              
      .then(response => {
        //   console.log(response.data)
        dispatch(fetchData(response.data))  
      })
      .catch(error => { throw(error); });
  };
};
                    

export const post =  ({name, username, email}) => {                                   
  return (dispatch) => {
    return axios.post(`${apiUrl}`,{name, username, email})                              
      .then(response => {
        //   console.log(response.data)
        dispatch(postData(response.data))  
      })
    //   .then((response) => {
    //    history.push("/");
    //   })

 
      .catch(error => { throw(error); });
  };
};

export const getUser =  (id) => {                                   
    return (dispatch) => {
      return axios.get(`${apiUrl}/${id}`)                              
        .then(response => {
            dispatch(getS(response.data))
           
        })
        .catch(error => { throw(error); });
    };
  };

  export const updateData =  ({name, username, email, id}) => {
                                      
    return (dispatch) => {
      return axios.patch(`${apiUrl}/${id}`,{name, username, email})                              
        .then(response => {
          //   console.log(response.data)
          dispatch(update(response.data))  
        })
        .catch(error => { throw(error); });
    };
  };


                   

export const remove =  (id) => {                                   
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}`)                              
      .then(response => {
        //   console.log(id)
        alert(id);
        dispatch(deleteData({id}))  
      })
      .catch(error => { throw(error); });
  };
};






