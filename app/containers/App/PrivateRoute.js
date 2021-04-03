import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import SidebarAndHeader from 'containers/SidebarAndHeader/Loadable';
// import {isAuthenticated} from '../../ApiHandlers/AuthHandler';

const PrivateRouteLoggedIn = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // isAuthenticated() ? (
      localStorage.getItem('accessToken') ? (
        // <SidebarAndHeader {...props}>
        <Component {...props} />
      ) : (
        <Redirect
          // to={`/login${props.location.pathname !== '/' ? `?redirect=${props.location.pathname}` : ''}`} />
          to={`/`}
        />
      )
    }
  />
);

export default PrivateRouteLoggedIn;
