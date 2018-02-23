import React from "react";

const DoctorRow = props => {
  const { doctors } = props;
  const listItems = doctors.map((doctor, index) => {
    return <li key={index}>{doctor.name}</li>;
  });
  return <ul>{listItems}</ul>;
};

export default DoctorRow;
