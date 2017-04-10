/*REACT LIBRARIES*/
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

/*REACT PARENT COMPONENT*/
import Root from './root'

/*GLOBAL VARIABLES*/
declare var module: { hot: any };
const rootEl = document.getElementById('appContent');

/*Principal render*/

ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>, rootEl);

/*Condition to react-hot-loader*/

if (module.hot) {
  module.hot.accept('../components/Root', () => {
    // If we receive a HMR action for our App container, then reload it
    // using require (we can't do this dynamically with import)
    const NextApp = require('../components/Root').default;

    // And render it into our root element again
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,rootEl)
  })
};