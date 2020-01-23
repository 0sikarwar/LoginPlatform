export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

export const registerUser = (data) => {
    return {
        type: REGISTER_USER,
        data: data
    }
}

export const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        data:data
    }
}

export const loginUserSuccess = (data) => {
    return {
        type: LOGIN_USER_SUCCESS,
        data:data
    }
}

export const loginUserFailure = (data) => {
    return {
        type: LOGIN_USER_FAILURE,
        data:data
    }
}