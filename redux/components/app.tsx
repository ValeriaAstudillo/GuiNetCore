/*REACT LIBRARIES*/
import * as React from "react"
import { connect } from 'react-redux'

/*REACT CHILD COMPONENTS*/
import Header from './templateElements/themeforest/header'
import Menu from './templateElements/themeforest/menu'

/*REACT COMPONENT*/
export default class App extends React.Component<any, any> {

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

        const {children} = this.props;
        return (
            <section className="vbox">
                <section>
                    <section className="hbox stretch">
                        <Menu/>
                        <section id="content">
                            <Header route={this.props.routes[1]} />
                            {children}
                        </section>
                    </section>
                </section>
            </section>
        )
    }
}