import { SET_DOCTOR_VISIBILITY_FILTER } from "../actions/types";

const filterDoctor = (state = "", action) => {
  console.log(action.search_text);
  switch (action.type) {
    case SET_DOCTOR_VISIBILITY_FILTER:
      return action.search_text;
    default:
      return state;
  }
};

export default filterDoctor;
