import { connect } from "react-redux";
import { setVisibilityFilter } from "./actions";
import ScheduleTab from "./ScheduleTab";

var _ = require("lodash");

const getCounts = (schedules, filterDoctorsPatients, filterDoctor) => {
  //below code filter the patients with respect to the doctors
  //checked in the checkbox
  var size = Object.keys(filterDoctorsPatients).length;
  if (size !== 0) {
    schedules = _.filter(schedules, function(a) {
      return _.find(filterDoctorsPatients, function(b) {
        return b.doctor_id === a.doctor_id;
      });
    });
  }

  filterDoctor = filterDoctor.toLowerCase();
  schedules = _.filter(schedules, function(item) {
    return item.doctor.toLowerCase().indexOf(filterDoctor) > -1;
  });

  //Get the count of the patient's SCHEDULED,WAITING,ENGAGED,COMPLETED
  var count = _.chain(schedules)
    .groupBy("status")
    .map((items, name) => ({ name, count: items.length }))
    .value();
  return count;
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
   schedulecount: getCounts(
    state.schedules,
    state.filterDoctorsPatients,
    state.filterDoctor
  )
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const ScheduleFilterTab = connect(mapStateToProps, mapDispatchToProps)(
  ScheduleTab
);

export default ScheduleFilterTab;
