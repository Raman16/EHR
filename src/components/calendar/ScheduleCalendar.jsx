import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSchedules } from "./actions";

class ScheduleCalendar extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSchedules("03-07-2017"));
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div id="calendar" className="medrixo-calendar" />
        </div>
      </div>
    );
  }
}

export default connect()(ScheduleCalendar);
