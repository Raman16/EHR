import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { loadingBarReducer } from "react-redux-loading-bar";
import { notification } from "../components/notification/reducers";
import { schedules, visibilityFilter,doctors,filterDoctor,filterDoctorsPatients }
         from "../components/calendar/reducers";

const rootReducer = combineReducers({
  form: formReducer,
  loadingBar: loadingBarReducer,
  notification,
  schedules,
  visibilityFilter,
  doctors,
  filterDoctor,
  filterDoctorsPatients,

});

export default rootReducer;
