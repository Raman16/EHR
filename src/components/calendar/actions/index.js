import shortid from "shortid";
import { addNotification } from "../../notification/actions";
import { request } from "../../../helpers";
// import { request,request_doctors} from "../../../helpers";

import {
  FETCH_SCHEDULES,
  ADD_SCHEDULE,
  SET_SCHEDULE_VISIBILITY_FILTER,
  SET_SCHEDULE_STATUS,
  FETCH_ALL_DOCTORS,
  SET_DOCTOR_VISIBILITY_FILTER,
  SET_DOCTORS_PATIENTS_VISIBILITY_FILTER
} from "./types";

export const fetchdoctors = () => dispatch => {
  dispatch({
    type: FETCH_ALL_DOCTORS,
    payload: request
      .get("calendar/doctors")
      .then(response => {
        return response.data;
      })
      .catch(error => {})
  });
};

export const fetchSchedules = (
  date = "03-07-2017",
  doctors = []
) => dispatch => {
  dispatch({
    type: FETCH_SCHEDULES,
    payload: request
      .get("calendar/patients/scheduled?date=" + date)
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
      .put("calendar/patients/changestatus", { id, status })
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

export const filterDoctors = (filter = "") => ({
  type: SET_DOCTOR_VISIBILITY_FILTER,
  search_text: filter
});


let doctor_filter = [];
export const filterDoctorsPatient = (status, id) => dispatch => {
  dispatch({
    type: SET_DOCTORS_PATIENTS_VISIBILITY_FILTER,
    doctor_filter,
    status: status,
    doctor_id: id
  });
};
