import {FETCH_DATA} from './Constants';
import {POST_DATA} from './Constants';
import {DELETE_DATA} from './Constants';
import {GET_USER} from './Constants';
import {UPDATE_DATA} from './Constants';




const initialState = { users: [] }
export default function Reducer(state = initialState, action) {  
  switch (action.type) {
    case FETCH_DATA:                                               
      return {
          ...state,
          users:action.payload
      };
      case POST_DATA:
          return {
            ...state,
          users:action.payload
          }
          case GET_USER:
            return {
              ...state,
            users:action.payload
            }
            case UPDATE_DATA:
            return {
              ...state,
            users:action.payload
            }


    case DELETE_DATA:
      return {users: state.users.filter(user => user.id !== action.payload.id)}
      

    default:                                                             
      return state;
  }
}
