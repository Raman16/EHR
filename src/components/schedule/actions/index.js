import shortid from "shortid";
import { addNotification } from "../../notification/actions";
import { request } from "../../../helpers";

import {
  FETCH_SCHEDULES,
  ADD_SCHEDULE,
  SET_SCHEDULE_VISIBILITY_FILTER,
  SET_SCHEDULE_STATUS
} from "./types";

export const fetchSchedules = () => dispatch => {
  dispatch({
    type: FETCH_SCHEDULES,
    payload: request
      .get("calendar/patients/scheduled")
      .then(response => {
        dispatch(addNotification("Schedules successfully loaded!", "success"));
        return response.data;
      })
      .catch(error => {})
  });
};

export const addSchedule = name => dispatch => {
  dispatch({
    type: ADD_SCHEDULE,
    payload: request
      .post("schedules", { id: shortid.generate(), name, status: "SCHEDULED" })
      .then(response => {
        dispatch(addNotification("Schedule successfully added!", "success"));
        return response.data;
      })
      .catch(error => {})
  });
};

export const setScheduleStatus = (id, status) => dispatch => {
  dispatch({
    type: SET_SCHEDULE_STATUS,
    payload: request
      .put("calendar/patients/changestatus", {id,status })
      .then(response => {
        dispatch(
          addNotification("Schedule status successfully changed!", "success")
        );
        return response.data;
      })
      .catch(error => {})
  });
};

export const setVisibilityFilter = filter => ({
  type: SET_SCHEDULE_VISIBILITY_FILTER,
  filter
});
