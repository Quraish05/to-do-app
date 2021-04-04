/*
 *
 * Tasks reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  allTasks: [
    {
      name: 'Todays',
      description: 'Todays list of tasks',
      branchTo: 'Todo',
      tag: 'Personal',
      subTasks: [],
      date: '',
    },
  ],
};

/* eslint-disable default-case, no-param-reassign */
const tasksReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default tasksReducer;
