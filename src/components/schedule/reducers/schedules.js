import schedule from "./schedule";
import {
  FETCH_SCHEDULES_FULFILLED,
  ADD_SCHEDULE_FULFILLED,
  SET_SCHEDULE_STATUS_FULFILLED
} from "../actions/types";

const schedules = (state = [], action) => {
  switch (action.type) {
    case FETCH_SCHEDULES_FULFILLED: {
      return action.payload;
    }
    case ADD_SCHEDULE_FULFILLED: {
      return [...state, schedule(undefined, action)];
    }
    case SET_SCHEDULE_STATUS_FULFILLED: {
      return state.map(item => schedule(item, action));
    }

    default:
      return state;
  }
};

export default schedules;
