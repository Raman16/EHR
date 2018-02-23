import React, { Component } from "react";
import PatientForm from "./PatientForm";

class Patient extends Component {
  render() {
    return (
      <div>
        <h2>Patient</h2>
        <div className="container">
          <button
            className="btn btn-sm btn-success"
            data-toggle="modal"
            data-target="#myModal"
          >
            <span className="icon plus">
              <i className="la la-plus" aria-hidden="true" />
            </span>{" "}
            Add patient
          </button>
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <PatientForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Patient;
