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

export function Tasks() {
  useInjectReducer({ key: 'tasks', reducer });
  useInjectSaga({ key: 'tasks', saga });

  return (
    <div>
      <Helmet>
        <title>Tasks</title>
        <meta name="description" content="Description of Tasks" />
      </Helmet>
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
