/*Functions to create actions*/

export function setUserState(name: string, lastName: string) {
    return {
        type: 'SET_USER_STATE',
        dataload: { userName: name, userLastName: lastName}
    }
}