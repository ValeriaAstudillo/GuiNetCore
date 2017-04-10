/*Object to store information*/
const exampleState = {
    userName: "",
    userLastName: ""
}

/*Function to manage state*/
export default function exampleReducer(state = exampleState, action: any) {
    switch (action.type) {
        case "SET_USER_STATE": {
            return Object.assign({}, state, { userName: action.dataload.userName, userLastName: action.dataload.userLastName})
        }
        default:
            return state
    }
}
