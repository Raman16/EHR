import React from "react";
import PropTypes from "prop-types";
import ScheduleRow from "./ScheduleRow";
//import Loader from "../Loader";

const ScheduleList = ({ schedules, onScheduleClick }) =>
  <div className="appoint-list-container">
    <ul className="appointment-lists">
      {schedules.map(schedule =>
        <ScheduleRow
          key={schedule.id}
          {...schedule}
          onClick={status => onScheduleClick(schedule.id, status)}
        />
      )}
    </ul>
  </div>;

ScheduleList.propTypes = {
  schedules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired
      // name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onScheduleClick: PropTypes.func.isRequired
};

//export default Loader(ScheduleList);
export default ScheduleList;
