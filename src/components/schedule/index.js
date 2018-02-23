import React, { Component } from 'react';
import { connect } from "react-redux";
import ScheduleHeader from './ScheduleHeader';
import AddSchedule from './AddSchedule';
import VisibleScheduleList from './VisibleScheduleList';
import { fetchSchedules } from "./actions";

class Schedule extends Component {
  componentDidMount() {    
    //dispatch fetchSchedules() to VisibleScheduleList
    this.props.dispatch(fetchSchedules());
  }

  render() {
    return (
      <div>
        <AddSchedule />
        <ScheduleHeader />
        <VisibleScheduleList />
      </div>
    );
  }
}

export default connect()(Schedule);
