import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './containers/Login';
import Home from './containers/Home';

const RouterComponent = () => {
  return (
    <Router >
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={Login} title="Please Login" hideNavBar/>
        </Scene>
        <Scene key="main">
          <Scene
            // rightTitle="Add"
            key="home"
            component={Home}
            title="Home"
            initial
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
