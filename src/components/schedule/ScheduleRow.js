import React from 'react';
import PropTypes from 'prop-types';
import {
  SCHEDULE_STATUS_WAITING,
  SCHEDULE_STATUS_ENGAGED,
  SCHEDULE_STATUS_COMPLETED,
} from './config';

const ScheduleRow = ({ onClick, status, name }) => {


const ScheduleRow = ({ onClick, status, patient }) => {

  let statusColor = 'black'

  switch (status) {
    case SCHEDULE_STATUS_WAITING:
      statusColor = 'orange'
      break;
    case SCHEDULE_STATUS_ENGAGED:
    statusColor = 'red'
      break;
    case SCHEDULE_STATUS_COMPLETED:
    statusColor = 'green'
      break;
    default:
    statusColor = 'black'
      break;
  }

  return (
    <li
      style={{
        color: statusColor,
      }}
    >
      {patient}
      <button onClick={() => onClick(SCHEDULE_STATUS_WAITING)}>Waiting</button>
      <button onClick={() => onClick(SCHEDULE_STATUS_ENGAGED)}>Engage</button>
      <button onClick={() => onClick(SCHEDULE_STATUS_COMPLETED)}>Done</button>
    </li>
  );
};

ScheduleRow.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ScheduleRow;
