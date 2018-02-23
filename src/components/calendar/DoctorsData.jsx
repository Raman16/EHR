import React from "react";
import DoctorRow from "./DoctorRow";
import DoctorFilter from "./DoctorFilter";

const DoctorsData = ({ doctors, filterDoctorsList, fetchDoctorsPatients }) => {
  const listItems = Object.keys(doctors).map((key, index) => {
    return (
      <div key={key} className="calapp-list-group">
        <h4>
           {key}
          <span className="overall-count">
          </span>
        </h4>
        <DoctorRow
          doctors={doctors[key]}
          onClick={(status, id) => fetchDoctorsPatients(status, id)}
        />
      </div>
    );
  });
  return (
    <div className="appoint-select-cover">
      <div className="appoint-select-head">
        <DoctorFilter onKeyPress={text => filterDoctorsList(text)} />
      </div>
      <div className="content-box calendar-content-box">
        {listItems}
      </div>
    </div>
  );
};

export default DoctorsData;
