import React, { Component } from "react";
import ScheduleHeader from "./ScheduleHeader";
import VisibleScheduleList from "./VisibleScheduleList";


class ScheduledPatients extends Component {
  render() {
    return (
      
      <aside className="appoint-list-box">
        
        <div className="side-min-btn right">
          <button>
            <span className="icon">
              <i className="la la-bars" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="appoint-list-cover">
          <div className="appoint-list-head">
            <div className="appoint-list-change pull-right">
              <button>
                <i className="la la-angle-left" aria-hidden="true" />
              </button>
              <button>
                <i className="la la-angle-right" aria-hidden="true" />
              </button>
            </div>
            <h4>Schedule (Today)</h4>

           

          </div>

          <div className="content-box calendar-content-box">
            <div className="applist-tab-box">
              <ScheduleHeader />
            </div>
            <div className="appoint-tab-content">
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="scheduled">
                  <div className="appoint-list-container">
                    <VisibleScheduleList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </aside>
    );
  }
}

export default ScheduledPatients;
