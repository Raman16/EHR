import React from "react";
import ScheduleFilterTab from "./ScheduleFilterTab";
import {
  SHOW_SCHEDULED,
  SHOW_WAITING,
  SHOW_ENGAGED,
  SHOW_COMPLETED
} from "./config";

const ScheduleHeader = () =>
  <div>
    <div className="applist-tab-box">
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation" className="active">
          <ScheduleFilterTab filter={SHOW_SCHEDULED}>
            Scheduled
          </ScheduleFilterTab>
        </li>
        <li role="presentation">
          <ScheduleFilterTab filter={SHOW_WAITING}>Waiting</ScheduleFilterTab>
        </li>
        <li role="presentation">
          <ScheduleFilterTab filter={SHOW_ENGAGED}>Engaged</ScheduleFilterTab>
        </li>
        <li role="presentation">
          <ScheduleFilterTab filter={SHOW_COMPLETED}>
            Completed
          </ScheduleFilterTab>
        </li>
      </ul>
    </div>
  </div>;

export default ScheduleHeader;
