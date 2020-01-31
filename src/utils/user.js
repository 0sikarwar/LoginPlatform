import { saveItem, getItem } from './storage';
import { registerUserFailure, loginUserSuccess, loginUserFailure } from '../context/actions/user';

export const registerUser = async (newUser, dispatch) => {
    console.log("registerUser", newUser )
    const registeredUsers = await getItem('registeredUsers') || []
    const isExisting = registeredUsers.findIndex(registeredUser =>
        newUser.username === registeredUser.username)
    if (isExisting !== -1) {
        const errMsg = "Already registered user login now"
        dispatch(registerUserFailure(errMsg))
        return false
    }
    registeredUsers.push(newUser)
    if (await saveItem('registeredUsers', registeredUsers)) {
        loginUserSuccess(newUser)
        await saveItem('loggedIn', true)
        return true
    }
    const errMsg = "Something went wrong"
    dispatch(registerUserFailure(errMsg))
    return false
}

export const loginUser = async (userData, dispatch) => {
    const registeredUsers = await getItem('registeredUsers') || []
    const selectedUser = registeredUsers.find(registeredUser =>
        userData.username === registeredUser.username)
    if (!selectedUser) {
        const errMsg = "User does not exists"
        dispatch(loginUserFailure(errMsg))
        return false
    }
    if (userData.password !== selectedUser.password) {
        const errMsg = "Password did not matched"
        dispatch(loginUserFailure(errMsg))
        return false
    } 
    await saveItem('loggedInUsers',selectedUser)
    dispatch(loginUserSuccess(selectedUser))
    await saveItem('loggedIn', true)
    return true
    
}

export const getLoggedInUser = async (dispatch) => {
    const isLoggedIn = await getItem('loggedIn');
    const userData = await getItem('loggedInUsers');
    if (isLoggedIn && userData) {
        dispatch(loginUserSuccess(userData))
    }
}