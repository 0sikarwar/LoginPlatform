import React,{useReducer} from 'react'
import { ContextProvider } from './index';
import mainReducer from './reducers'
const initialState = { theme: {}, user: {} }
const ContextsProvider = (props) => {
    return (
        <ContextProvider value={useReducer(mainReducer, initialState)}>
          {props.children}
        </ContextProvider>
    )
}
export default ContextsProvider