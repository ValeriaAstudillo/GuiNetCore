export function setUserState(name: string, password: string) {
    return {
        type: 'SET_USER_STATE',
        dataload: { userName: name, userPassword: password }
    }
}

export function setProfileState(profileState: any) {
    return {
        type: 'SET_PROFILE_STATE',
        dataload: { profile: profileState }
    }
}

export function setOfficeState(officeState: any) {
    return {
        type: 'SET_OFFICE_STATE',
        dataload: { office: officeState }
    }
}

export function setSelectOfficeProfileState(selectOfficeProfileState: boolean) {
    return {
        type: 'SET_SELECT_OFFICE_PROFILE_STATE',
        dataload: { selectOfficeProfile: selectOfficeProfileState }
    }
}