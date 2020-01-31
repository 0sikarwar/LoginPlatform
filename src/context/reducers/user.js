import {
    REGISTER_USER_FAILURE,
    REGISTER_USER,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    RESET_USER_DATA
} from '../actions/user'
import { registerUser, loginUser } from '../../utils/user'

export default reducer = (state, action) => {
    console.log('action',action)
    switch (action.type) {
        case REGISTER_USER:
            registerUser(action.data, action.dispatch)
            return {
                ...state,
                loading: true,
            }
        case REGISTER_USER_FAILURE: 
            return {
                ...state,
                registerErrMsg: action.errMsg,
                loading: false,
            }
        case LOGIN_USER:
            loginUser(action.data, action.dispatch)
            return {
                ...state,
                loading:true
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                userData: action.data,
                loading:false
            }
        case LOGIN_USER_FAILURE: 
            return {
                ...state,
                loginErrMsg: action.errMsg,
                loading: false,
            }
        case RESET_USER_DATA:
            return {
                ...state,
                registerErrMsg: null,
                loginErrMsg: null,
                userData: null
            }
        default: return state
    }
}