import React from 'react';
import ScheduleFilterTab from './ScheduleFilterTab';
import {
  SHOW_SCHEDULED,
  SHOW_WAITING,
  SHOW_ENGAGED,
  SHOW_COMPLETED,
} from './config';

const ScheduleHeader = () => (
  <p>
    Show:
    {' '}
    <ScheduleFilterTab filter={SHOW_SCHEDULED}>
      Scheduled
    </ScheduleFilterTab>
    {', '}
    <ScheduleFilterTab filter={SHOW_WAITING}>
      Waiting
    </ScheduleFilterTab>
    {', '}
    <ScheduleFilterTab filter={SHOW_ENGAGED}>
      Engaged
    </ScheduleFilterTab>
    {', '}
    <ScheduleFilterTab filter={SHOW_COMPLETED}>
      Completed
    </ScheduleFilterTab>
  </p>
);

export default ScheduleHeader;
