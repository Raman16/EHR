import React from "react";

const DoctorFilter = props => {
  return (
    <div className="sq-input-box">
      <input
        type="text"
        name="search"
        className="input-text-box"
        placeholder="Doctor Search"
        onKeyUp={e => props.onKeyPress(e.target.value)}
      />
    </div>
  );
};

export default DoctorFilter;
