import { FETCH_ALL_DOCTORS_FULFILLED} from "../actions/types";

const doctors = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_DOCTORS_FULFILLED: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default doctors;
