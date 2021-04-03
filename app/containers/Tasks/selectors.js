import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tasks state domain
 */

const selectTasksDomain = state => state.tasks || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Tasks
 */

const makeSelectTasks = () =>
  createSelector(
    selectTasksDomain,
    substate => substate,
  );

export default makeSelectTasks;
export { selectTasksDomain };
