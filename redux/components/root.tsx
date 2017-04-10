/*REACT LIBRARIES*/
import * as React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

/*REACT CHILD COMPONENTS*/
import App from './app'
import Home from './home'
import NotFound from './not-found'
import ProfileUser from './templateElements/themeforest/profile-user'
import ChangeOfficeProfile from './templateElements/themeforest/change-office-profile'
import ChangeUser from './templateElements/themeforest/change-user'
import ChangePassword from './templateElements/themeforest/change-password'
import UnlockScreen from './templateElements/themeforest/unlock-screen'
import SignOut from './templateElements/themeforest/sign-out'
import Profiles from './sec/profiles'
import Users from './sec/users'
import Views from './flow/views'
import Core from './netCore/core'

/*REDUX COMPONENTS*/
import configureStore from '../store/configure-store'

/*GLOBAL VARIABLES*/
const store = configureStore;
const history = syncHistoryWithStore(browserHistory, store)

/*REACT COMPONENT*/
export default class Root extends React.Component<any, any> {

    /*To add new Routes, put inside the first <Route> tag. Also import the child component.
        Example: <Route path='/home' component={Home}/>*/

    render() {        
        return (
            <Provider store={store}>
                <Router history={history} >
                    <Route path='/' component={App}>                    
                        <Route path='/home' component={Home}/>
                        <Route path='/profileUser' component={ProfileUser} pageName="Perfil de usuario" pageDescription="Información destacada de usuario" />
                        <Route path='/changeOfficeProfile' component={ChangeOfficeProfile} pageName="Oficina o perfil" pageDescription="Cambio de oficina o perfil" />
                        <Route path='/changeUser' component={ChangeUser} pageName="Usuario" pageDescription="Cambio de usuario" />
                        <Route path='/changePassword' component={ChangePassword} pageName="Contraseña" pageDescription="Cambio de contraseña" />
                        <Route path='/unlockScreen' component={UnlockScreen} pageName="Bloqueo de pantalla" pageDescription="Bloquear su pantalla" />
                        <Route path='/signOut' component={SignOut} pageName="Cerrar Sesión" pageDescription="Cerrar sesión de usuario vigente" />
                        <Route path='/profiles' component={Profiles} pageName="Administración" pageDescription="Administración de profiles" />
                        <Route path='/users' component={Users} pageName="Administración" pageDescription="Administración de usuarios" />
                        <Route path='/views' component={Views} pageName="Administración" pageDescription="Administración de vistas" />
                        <Route path='/core' component={Core} pageName="Administración" pageDescription="Administración de perfiles" />
                        <Route path='*' component={NotFound} />                        
                    </Route>
                </Router>
            </Provider>
        )
    }
}
