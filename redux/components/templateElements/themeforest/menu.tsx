/*REACT LIBRARIES*/
import * as React from "react"

/*REACT CHILD COMPONENTS*/
import MenuItem from './menu-item'

/*REACT COMPONENT*/
export default class Menu extends React.Component<any, any> {

    /*REACT LIFE CYCLE METHODS*/

    /*constructor: Only runs when the component is mounted. 
        - Enables to set the initial state value, that is accessible inside the component via this.state.
        - It is used to bind "this" to the method instance.
    */        
    constructor(props: any) {
        super(props);
        this.state = {
            open: false
        };
        this.toggleShowHide = this.toggleShowHide.bind(this);
    }    

    /*render: The render() method is required always.
        - Returns the needed component markup.
        - Returns a tree of React components that will eventually render to HTML.
    */
    render() {
        var classes = "bg-black aside-md hidden-print";
        var navClasses = "nav-primary";
        if (!this.state.open) {
            classes += ' nav-xs';
            navClasses += ' hidden-xs';
        }

        const {apps, schema, blocks, selectedAppIndex} = this.props;

        return (
            <aside className={classes} id="nav">
                <section className="vbox">
                    <header className="header bg-danger brand-header lock-header pos-stat clearfix">
                        <a className="btn btn-link visible-xs" onClick={() => this.toggleShowHide() } data-toggle="class:nav-off-screen,open" data-target="#nav,html">
                            <i className="fa fa-bars"></i>
                        </a>
                        <div className="text-center tophead">
                            <img width="25" src="/templates/themeforest/images/react-logo.png" /><br />
                            <span className="text-center" style={{ lineHeight: '21px', fontWeight: 'bold' }}>Admin</span>
                        </div>
                    </header>
                    <section className="w-f scrollable">
                        <div className="slimScrollDiv">
                            <div className="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="5px" data-color="#333333">
                                <nav className={navClasses}>
                                    <MenuItem />
                                </nav>
                            </div>                            
                            <div className="slimScrollBar scrollBar"></div>
                            <div className="slimScrollRail scrollRail"></div>
                        </div>
                    </section>
                </section>
            </aside>
        )
    } 

    /*METHODS*/

    toggleShowHide() {
        this.setState({ open: !this.state.open });
    }   
}

/*REACT COMPONENT*/
class SubMenuItem extends React.Component<any, any> {
    render() {
        var badge = this.props.badgeText ? <b className="badge bg-danger pull-right">{this.props.badgeText}</b> : null;
        return (
            <li> <Link to={this.props.link}> <i className="fa fa-angle-right"></i> {badge}<span>{this.props.linkText}</span> </Link> </li>
        );
    }
}



/*<MenuItem link={'/images'} icon='fa-picture-o' color='bg-success' linkText='Images' currentPage={this.props.currentPage} />*/
/*<MenuItem listaMenu={menu} link={'/'} icon='fa-picture-o' color='bg-success' linkText='Images' currentPage={this.props.currentPage} >
                                            <SubMenuItem link={'/images'} linkText={'Images'} />
                                        </MenuItem>*/

/*<MenuItem listaMenu={menu} link={'/images'} color='bg-success' linkText='Images' currentPage={this.props.currentPage} />*/