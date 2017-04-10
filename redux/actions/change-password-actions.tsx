export function setPasswordState(currentPass: string, newPass: string, confirmPass:string) {
    return {
        type: 'SET_PASSWORD_STATE',
        dataload: { currentPassword: currentPass, newPassword: newPass, confirmPassword: confirmPass }
    }
}