import React from "react";
import DoctorRow from "./DoctorRow";

const DoctorList = props => {
  const { doctors } = props;
  const listItems = Object.keys(doctors).map((key, index) => {
    return (
      <li key={key}>
        <b>{key} - {doctors[key].length}</b>
        <DoctorRow doctors={doctors[key]} />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
};

export default DoctorList;
