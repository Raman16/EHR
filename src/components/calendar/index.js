import React, { Component } from "react";
import { connect } from "react-redux";
import ScheduleCalendar from "./ScheduleCalendar";
import ScheduledPatients from "./ScheduledPatients";
import DoctorsList from "./DoctorsList";
import AppointmentBooking from "./AppointmentBooking";

import $ from "jquery";

import { fetchdoctors } from "./actions";

class Schedule extends Component {
  componentDidMount() {
    this.props.dispatch(fetchdoctors());

    //Below code toggles checkbox to Active/Inactive
    $(document).on("click", ".calapp-list-box", function() {
      $(this).toggleClass("active");
    });
  }

  render() {
    return (
      <section className="content-container">
        <div className="container-fluid">
          <div className="cal-appoint-container active-left-menu active-right-menu">
            <aside className="appoint-select-box">
              <div className="side-min-btn left">
                <button>
                  <span className="icon">
                    <i className="la la-bars" aria-hidden="true" />
                  </span>
                </button>
              </div>

              <DoctorsList />
            </aside>
              {/*Add Appointment button*/}
            <button
                    className="btn btn-sm btn-success"
                    data-toggle="modal"
                    data-target="#myModal"
             >
            <span className="icon plus">
              <i className="la la-plus" aria-hidden="true" />
            </span>{" "}
              Book Appointment
            </button>
             <div className="modal fade" id="myModal" role="dialog">
               <div className="modal-dialog modal-lg" role="document">
                 <AppointmentBooking />
               </div>
             </div>
             {/*End Add Appointment button*/}
            <ScheduleCalendar />
          
            <ScheduledPatients />
             
          </div>
        </div>
      </section>
    );
  }
}
export default connect()(Schedule);
