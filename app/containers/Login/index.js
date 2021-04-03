/**
 *
 * Login
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';

import { loginAction } from './actions';

import { Col, Container, Row } from 'reactstrap';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <Container fluid>
        <Row>
          <Col xs="12" md="6" className="pageCentered loginLeftCol text-center">
            <p className="loginPageHeader w-100">
              switchon
              <br />
              <p className="loginPageSubHeader">Assignments</p>
            </p>
          </Col>

          <Col xs="12" md="6" className="mt-3 pt-3 mt-sm-5 pt-sm-5 text-center">
            <p className="loginPageHeaderBlack w-100 mb-4">TO-DO APP</p>

            <Col xs="12" md="12" className="mt-5 text-center">
              <TextField
                className="w-75 mb-2 mb-sm-4"
                variant="outlined"
                id="input-with-icon-textfield"
                label="Email ID"
                value={email}
                onChange={e => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Col>
            <Col xs="12" md="12" className="mt-3 text-center">
              <TextField
                // className={classes.margin}
                className="w-75 mb-4"
                variant="outlined"
                id="input-with-icon-textfield"
                label="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Col>

            <Col xs="12" md="12" className="mt-3 text-center">
              <Button
                color="primary"
                variant="contained"
                fullWidth
                className="w-75"
                onClick={() => {
                  props.dispatch(loginAction(email, password));
                }}
              >
                Login
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
