import { SET_DOCTORS_PATIENTS_VISIBILITY_FILTER } from "../actions/types";
var _ = require("lodash");

const filterDoctorsPatients = (state = [], action) => {
  switch (action.type) {
    case SET_DOCTORS_PATIENTS_VISIBILITY_FILTER:
      if (action.status === true) {
        action.doctor_filter.push({
          doctor_id: action.doctor_id,
          status: action.state
        });
        return Object.assign({}, action.doctor_filter, {});
      } else {
        var removeIndex = action.doctor_filter
          .map(function(item) {
            return item.doctor_id;
          })
          .indexOf(action.doctor_id);

        action.doctor_filter.splice(removeIndex, 1);
        return Object.assign({}, action.doctor_filter, {});
      }

    default:
      return state;
  }
};

export default filterDoctorsPatients;
