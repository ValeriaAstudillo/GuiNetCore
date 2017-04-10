/*REACT LIBRARIES*/
import * as React from "react"
import {Link} from 'react-router'
import { Nav, MenuItem, Dropdown  } from 'react-bootstrap';

/*REACT COMPONENT*/
export default class Profile extends React.Component<any, any> {
    
    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);
    }

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {
        var aux: any = null;
        return (
            <Nav >
                <Dropdown id="dropdown-custom-1" style={{ position: 'absolute', right:10}}>
                    <Dropdown.Toggle>
                        <span className="thumb-sm avatar pull-left" >
                            <img src="../images/icons/Supervisores_128.png"/> 
                        </span>
                        { SesionWeb().Usuario.PrimerNombre + ' ' + SesionWeb().Usuario.SegundoNombre + ' ' + SesionWeb().Usuario.ApellidoPaterno + ' ' + SesionWeb().Usuario.ApellidoMaterno + ' '} 
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <li>
                            <Link style={{ textAlign: 'right' }} to="/profileUser">{CORE_TAG('MyProfile') }</Link>
                        </li>
                        <li>
                            <Link style={{ textAlign: 'right' }} to="/changeOfficeProfile">{CORE_TAG('ChangeOfficeProfile') }</Link>
                        </li>
                        <li>
                            <Link style={{ textAlign: 'right' }} to="/changeUser">{CORE_TAG('ChangeUser') }</Link>
                        </li>
                        <li>
                            <Link style={{ textAlign: 'right' }} to="/changePassword">{CORE_TAG('ChangePassword') }</Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <Link style={{ textAlign: 'right' }} to="/unlockScreen">{CORE_TAG('LockScreen') }</Link>
                        </li>
                        <li>
                            <Link style={{ textAlign: 'right' }} to="/signOut">{CORE_TAG('SignOut') }</Link>
                        </li>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>            
        )
    }
}
