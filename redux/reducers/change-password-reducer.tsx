const passwordState = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
}

export default function changePasswordReducer(state = passwordState, action: any) {
    switch (action.type) {
        case "SET_PASSWORD_STATE": {
            return Object.assign({}, state, { currentPassword: action.dataload.currentPassword, newPassword: action.dataload.newPassword, confirmPassword: action.dataload.confirmPassword })
        }
        default:
            return state
    }
}