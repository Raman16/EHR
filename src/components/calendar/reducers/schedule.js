import {
  ADD_SCHEDULE_FULFILLED,
  SET_SCHEDULE_STATUS_FULFILLED
} from "../actions/types";

const schedule = (state = {}, action) => {
  console.log(state);
   console.log(action);

  switch (action.type) {
    case ADD_SCHEDULE_FULFILLED: {
      return {
        id: action.payload.id,
        name: action.payload.name,
        status: action.payload.status
      };
    }


    case SET_SCHEDULE_STATUS_FULFILLED: {
      
      if (state.id !== action.payload.id) {
        return state;
      }

      return Object.assign({}, state, {
        status: action.payload.status
      });
    }

    default:
      return state;
  }
};
export default schedule;
