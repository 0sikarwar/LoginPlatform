import { CHANGE_THEME } from "../actions";
import userReducer from './user'
const themeReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                theme:'test'
            }
        default: return state
    }
}

export default mainReducer = (initialState, action) => {
    return ({
        theme: themeReducer(initialState.theme, action),
        user: userReducer(initialState.user, action)
    })
}