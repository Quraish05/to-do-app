/**
 *
 * Tasks
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTasks from './selectors';
import reducer from './reducer';
import saga from './saga';

import history from 'utils/history';

import TasksListPart from './TasksListPart';

import { Col, Container, Row } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export function Tasks(props) {
  useInjectReducer({ key: 'tasks', reducer });
  useInjectSaga({ key: 'tasks', saga });

  return (
    <div>
      <Helmet>
        <title>Tasks</title>
        <meta name="description" content="Description of Tasks" />
      </Helmet>
      <Container fluid>
        <Row style={{ minHeight: '100vh' }}>
          <Col xs="12" sm="3" className="statsColumn">
            <Row>
              <Col xs="12" sm="1" className="logoutBar px-0">
                <IconButton
                  onClick={() => {
                    history.push('/');
                    localStorage.removeItem('token');
                  }}
                >
                  <PowerSettingsNewIcon />
                </IconButton>
              </Col>
              <Col xs="12" sm="2" className="statsColumn">
                <div className="">hi</div>
                my name
              </Col>
            </Row>
          </Col>

          <Col xs="12" sm="9" className="">
            <TasksListPart {...props} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Tasks.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tasks: makeSelectTasks(),
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

export default compose(withConnect)(Tasks);
