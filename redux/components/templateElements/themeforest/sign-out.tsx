/*REACT LIBRARIES*/
import * as React from "react"
import { browserHistory } from 'react-router'

/*REACT COMPONENT*/
class SignOut extends React.Component<any, any>{

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);
        this.signOutNo = this.signOutNo.bind(this);
        this.signOutYes = this.signOutYes.bind(this);
    }

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {
        return (
            <div id="out"></div>
        )
    }

    /*componentDidMount: Only get called once, as soon as the render method has been executed.
        - Enables to define DOM manipulations or data fetching operations.
    */
    componentDidMount() {
        showQuestionMessage(CORE_TAG('SignOut'), CORE_MESSAGE('SureSignOut'), this.signOutYes, this.signOutNo)
    }

    /*METHODS*/

    signOutYes() {
        CloseSystem(SesionWeb().Usuario.CodigoUsuario, function () {
            endSesion();
            location.href = Kernel_Shared.plantilla.login;
        });
    }

    signOutNo() {
        browserHistory.goBack();
    }
}

export default SignOut;