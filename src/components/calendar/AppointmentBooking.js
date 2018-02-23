import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

//import { connect } from 'react-redux';
class AppointmentBooking extends Component {
  
  render() {
    
    return (
      <div className="modal-content">
        <div className="modal-header header-icon" />
        <div className="modal-body">
          <form>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="email">Patient Name:</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="pwd">Patient Id:</label>
                  <input type="password" className="form-control" id="pwd" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="email">Mobile Number:</label>
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="pwd">Email ID:</label>
                  <input type="password" className="form-control" id="pwd" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="email">Doctor:</label>
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group" />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4">
                <div className="form-group">
                  <label for="email">Schedule On:</label>
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label for="email">Schedule Time:</label>
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>

              <div className="col-sm-4">
                <div className="form-group">
                  <label for="email">Schedule For:</label>
                  <select className="form-control" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="email">Notes:</label>
                  <textarea className="form-control"></textarea>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group" />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default btn-success-outline"
            data-dismiss="modal"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
export default AppointmentBooking;
