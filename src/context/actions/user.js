export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const RESET_USER_DATA = 'RESET_USER_DATA'

export const registerUser = (data,dispatch) => {
    return {
        type: REGISTER_USER,
        data: data,
        dispatch
    }
}

export const registerUserFailure = (err) => {
    return {
        type: REGISTER_USER_FAILURE,
        errMsg: err
    }
}

export const loginUser = (data, dispatch) => {
    return {
        type: LOGIN_USER,
        data: data,
        dispatch
    }
}

export const loginUserSuccess = (data) => {
    return {
        type: LOGIN_USER_SUCCESS,
        data:data
    }
}

export const loginUserFailure = (errMsg) => {
    return {
        type: LOGIN_USER_FAILURE,
        errMsg:errMsg
    }
}

export const resetUserData = () => {
    return {
        type: RESET_USER_DATA
    }
}