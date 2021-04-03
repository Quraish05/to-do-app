/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import CurrencyConverter from 'containers/CurrencyConverter/Loadable';
import Login from 'containers/Login/Loadable';

import PrivateRoute from './PrivateRoute';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;
// max-width: calc(1250px + 16px * 2);


export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Bitcoin Currency Converter"
        defaultTitle="React.js Bitcoin Currency Converter"
      >
        <meta
          name="description"
          content="A React.js Bitcoin Currency Converter application"
        />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Login} />
        {/* <Route path="/" component={CurrencyConverter} /> */}
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
