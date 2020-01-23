import {
    REGISTER_USER,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from '../actions/user'
    

export default reducer = (state, action) => {
    switch (action.type) {
        case REGISTER_USER: 
            return {
                ...state,
                register:true
            }
        default: return state
    }
}