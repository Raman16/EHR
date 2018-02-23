import { connect } from "react-redux";
import { setScheduleStatus } from "./actions";
import ScheduleList from "./ScheduleList";
import {
  SHOW_SCHEDULED,
  SHOW_WAITING,
  SHOW_ENGAGED,
  SHOW_COMPLETED,
  SCHEDULE_STATUS_WAITING,
  SCHEDULE_STATUS_ENGAGED,
  // SCHEDULE_STATUS_SCHEDULED,
  SCHEDULE_STATUS_COMPLETED
} from "./config";
var _ = require("lodash");

const getVisibleSchedules = (
  schedules,
  filter,
  filterDoctorsPatients,
  filterDoctor
) => {
  //Below code filter Checked Doctors Checkbox Patients scheduled
  var size = Object.keys(filterDoctorsPatients).length;
  if (size !== 0) {
    schedules = _.filter(schedules, function(a) {
      return _.find(filterDoctorsPatients, function(b) {
        return b.doctor_id === a.doctor_id;
      });
    });
  }

  //Below code filter based on the doctor searchbox Patients scheduled
  filterDoctor = filterDoctor.toLowerCase();
  schedules = _.filter(schedules, function(item) {
    return item.doctor.toLowerCase().indexOf(filterDoctor) > -1;
  });

  switch (filter) {
    case SHOW_SCHEDULED:
      return schedules;

    case SHOW_WAITING:
      return schedules.filter(
        schedule => schedule.status === SCHEDULE_STATUS_WAITING
      );
    case SHOW_ENGAGED:
      return schedules.filter(
        schedule => schedule.status === SCHEDULE_STATUS_ENGAGED
      );
    case SHOW_COMPLETED:
      return schedules.filter(
        schedule => schedule.status === SCHEDULE_STATUS_COMPLETED
      );
    default:
      return schedules;
  }
};

const mapStateToProps = state => ({
  schedules: getVisibleSchedules(
    state.schedules,
    state.visibilityFilter,
    state.filterDoctorsPatients,
    state.filterDoctor
  )
});

const mapDispatchToProps = dispatch => ({
  onScheduleClick: (id, status) => {
    dispatch(setScheduleStatus(id, status));
  }
});

const VisibleScheduleList = connect(mapStateToProps, mapDispatchToProps)(
  ScheduleList
);

export default VisibleScheduleList;
