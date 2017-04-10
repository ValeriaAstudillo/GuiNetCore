/*REACT LIBRARIES*/
import * as React from "react"

/*REACT CHILD COMPONENTS*/
import Profile from './profile'

/*REACT COMPONENT*/
export default class Header extends React.Component<any, any> {

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props)
    }

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {
        const {route} = this.props;
        return (
            <div className="unlock-header subheader m-b-lg" style={{ height: 100, zIndex: 1000, position: 'relative' }}>
                <div className="container full">
                    <div className="m-b-lg">
                        <div className="pull-left w50 m-t-xs">
                            <h3 className="m-b-none">{route.pageName}</h3>
                            <small className="text-muted">{route.pageDescription}</small>
                        </div>
                        <div className="pull-left w50 m-t-xs">
                            <ul style={{ verticalAlign: 'top', marginTop: 30, marginLeft: 480 }} className="nav navbar-nav navbar-right  nav-user">
                                <Profile/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
