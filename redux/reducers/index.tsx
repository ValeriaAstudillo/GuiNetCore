import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

/*import reducers to add in combineReducers*/
import changeUser from "./change-user-reducer"
import changePassword from "./change-password-reducer"
import example from "./example-reducer"

export default combineReducers ({
    routing: routerReducer,
    changeUser,
    changePassword,
    example
})