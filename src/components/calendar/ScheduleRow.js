import React from "react";
import PropTypes from "prop-types";
import {
  SCHEDULE_STATUS_WAITING,
  SCHEDULE_STATUS_ENGAGED,
  SCHEDULE_STATUS_COMPLETED
} from "./config";

const ScheduleRow = ({
  onClick,
  status,
  patients,
  start_time,
  end_time,
  doctor,
  color
}) => {
  let buttonType = "",
    scheduled_at = "Scheduled at " + start_time;
  let scheduled_doctor = doctor.replace(/[^A-Z]/g, "");
  const bg_color = {
    background: color
  };

  switch (status) {
    case SCHEDULE_STATUS_WAITING:
      buttonType = (
        <button
          className="btn btn-xs btn-warning checkin-btn"
          onClick={() => onClick(SCHEDULE_STATUS_ENGAGED)}
        >
          Engage
        </button>
      );

      break;
    case SCHEDULE_STATUS_ENGAGED:
      buttonType = (
        <button
          className="btn btn-xs btn-success checkin-btn"
          onClick={() => onClick(SCHEDULE_STATUS_COMPLETED)}
        >
          Done
        </button>
      );

      break;
    case SCHEDULE_STATUS_COMPLETED:
      scheduled_at = "Completed at " + start_time;
      break;
    default:
      buttonType = (
        <button
          className="btn btn-xs btn-danger checkin-btn"
          onClick={() => onClick(SCHEDULE_STATUS_WAITING)}
        >
          Waiting
        </button>
      );

      break;
  }

  return (
    <li className="appointment-list">
      <span className="identity-box-big" style={bg_color}>
        {scheduled_doctor}
      </span>
      <h5>
        {" "}{patients}
      </h5>
      <h6>
        {scheduled_at}
      </h6>
      {buttonType}
    </li>
  );
};

ScheduleRow.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  patients: PropTypes.string.isRequired
};

export default ScheduleRow;
