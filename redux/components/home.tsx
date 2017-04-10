/*REACT LIBRARIES*/
import * as React from "react"

/*REACT CHILD COMPONENTS*/

/*GLOBAL VARIABLES*/


/*REACT COMPONENT*/
export default class Home extends React.Component<any, any>{

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);
    }

    /*componentWillMount: is called before the render method is executed.
    */
    componentWillMount() {
    }

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {
        return (
            <div>This is my Home Component</div>
        )
    }

    /*componentDidMount: Only get called once, as soon as the render method has been executed.
        - Enables to define DOM manipulations or data fetching operations.
    */
    componentDidMount() {       
    }    
}

/*REDUX METHODS*/
/*If a component have to connect to any reducer of the store, uncomment the mapStateToProps function*/

/*function mapStateToProps(state: any) {
    return {
        example: state.example
    }
}*/
