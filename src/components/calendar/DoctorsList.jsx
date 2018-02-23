import { connect } from "react-redux";
import DoctorsData from "./DoctorsData";
import { filterDoctors, filterDoctorsPatient } from "./actions";

var _ = require("lodash");

const getDoctorsBySpecialisation = (doctors, filterdoctor) => {
  let filterdoc = filterdoctor.toLowerCase();
  var filterdoctorsBySpec = _.filter(doctors, function(item) {
    var name = item.name;
    return name.toLowerCase().indexOf(filterdoc) > -1;
  });

  var result = _.chain(filterdoctorsBySpec)
    .groupBy("specility_type")
    .each(function(item) {
      return item;
    })
    .value();

  return result;
};

const mapStateToProps = state => ({
  doctors: getDoctorsBySpecialisation(state.doctors, state.filterDoctor)
});

const mapDispatchToProps = dispatch => ({
  filterDoctorsList: text => {
    dispatch(filterDoctors(text));
  },

  fetchDoctorsPatients: (status, id) => {
    dispatch(filterDoctorsPatient(status, id));
  }
});

const DoctorsList = connect(mapStateToProps, mapDispatchToProps)(DoctorsData);

export default DoctorsList;
