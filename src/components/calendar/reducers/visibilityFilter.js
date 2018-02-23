import { SET_SCHEDULE_VISIBILITY_FILTER } from '../actions/types';

const visibilityFilter = (state = 'SHOW_SCHEDULED', action) => {
  
  switch (action.type) {
    case SET_SCHEDULE_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;


  