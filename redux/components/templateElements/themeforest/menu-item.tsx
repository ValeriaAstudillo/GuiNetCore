/*REACT LIBRARIES*/
import * as React from "react"
import { Link } from 'react-router'

/*GLOBAL VARIABLES*/

var countRender = 0;
var countMount = 0;
var flagLink = '';
var menu: any;

/*REACT COMPONENT*/
export default class MenuItem extends React.Component<any, any> {

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
        debugger;               
        if (sessionStorage.Sesion) {
            menu = SesionWeb().Transacciones;
            if (menu.length == 1)
                menu = menu[0].Transacciones;
        }
        else
            menu = [];
    }
    
    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {        
        return (
            <ul className="nav">
                {
                    menu.map(function (element: any, i: any) {
                        return <ListElement itemMenu={element} key={i} />
                    })
                }
            </ul>
        )
    }
}

/*REACT COMPONENT*/
class ListElement extends React.Component<any, any> {

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */
    constructor(props: any) {
        super(props);
        this.state = {
            open: false
        }
    }    

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {
        if (this.props.itemMenu.Nivel == 'PANTALLA') {                        
            return (
                <li id={'Pantalla' + this.props.itemMenu.IdMenu}>
                    <Link to={flagLink}>
                        <i className={ 'm-l-md fa icon ' + this.props.itemMenu.Icono }></i>
                        <span>{this.props.itemMenu.Nombre}</span>
                    </Link>
                </li>
            )            
        }
        if (this.props.itemMenu.Nivel == 'SUBMODULO') {
            countRender++;
            if (this.props.itemMenu.Nombre == 'USUARIOS') {
                flagLink = '/users'
            } 
            else if (this.props.itemMenu.Nombre == 'PERFILES')
            {
                flagLink = '/profiles'
            }
            else if (this.props.itemMenu.Nombre == 'VISTAS')
            {
                flagLink = '/views'
            }
            else if (this.props.itemMenu.Nombre == 'VERIFICACIÓN FÍSICA')
            {
                flagLink = '/flows'
            }
            else if (this.props.itemMenu.Nombre == 'INSTITUCIÓN')
            {
                flagLink = '/core'
            }
            else{
                flagLink = '*'
            }

            return (
                <li className={this.props.itemClass} >
                    <a className={this.props.itemClass} href="#" >
                        <i className={'m-l-md fa icon ' + this.props.itemMenu.Icono}></i>
                        <span>{this.props.itemMenu.Nombre}</span>
                    </a>
                    <ul className="nav lt" id={'Submodulo' + countRender}></ul>
                </li>
            )
        }
        else {
            return null;
        }             
    }

    /*componentDidMount: Only get called once, as soon as the render method has been executed.
        - Enables to define DOM manipulations or data fetching operations.
    */
    componentDidMount() {        
        if (this.props.itemMenu.Nivel == 'SUBMODULO') {
            countMount++;
        }
        var submodulo = document.getElementById('Submodulo' + countMount);
        var pantalla = document.getElementById('Pantalla'+this.props.itemMenu.IdMenu);
        if (this.props.itemMenu.Nivel == 'PANTALLA') {
            submodulo.appendChild(pantalla);
        }
    }
}
