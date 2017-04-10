const userState = {
    userName: "",
    userPassword: ""
}

const profileState = { profile: "" }
const officeState = { office: "" }
const selectState = { selectOfficeProfile: false }


export default function changeUserReducer(state = { user: userState, profile: profileState, office: officeState, selectOfficeProfile: selectState }, action: any) {
    switch (action.type) {
        case "SET_USER_STATE": {
            return Object.assign({}, state, {
                user: action.dataload
            })
        }
        case "SET_PROFILE_STATE": {
            return Object.assign({}, state, {
                profile: action.dataload
            })
        }
        case "SET_OFFICE_STATE": {
            return Object.assign({}, state, {
                office: action.dataload
            })
        }
        case "SET_SELECT_OFFICE_PROFILE_STATE": {
            return Object.assign({}, state, {
                selectOfficeProfile: action.dataload
            })
        }
        default:
            return state
    }
}