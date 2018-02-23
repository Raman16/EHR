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
  SCHEDULE_STATUS_COMPLETED
} from "./config";
const getVisibleSchedules = (schedules, filter) => {
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
  schedules: getVisibleSchedules(state.schedules, state.visibilityFilter)
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
