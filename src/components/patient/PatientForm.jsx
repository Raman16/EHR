import React from "react";
import { Field, reduxForm } from "redux-form";
import Validator from "validatorjs";
import SubmitButton from "./SubmitButton";
import submit from "./submit";

import "react-select/dist/react-select.css";
import SelectGroup from "./SelectGroup.js";
import Referredby from "./Referredby.js";
import Occupation from "./Occupation.js";
import Languagedrop from "./Languagedrop.js";
import Bloodgroup from "./Bloodgroup.js";
//import Webcamera from "./Webcamera.js";
import Fileupload from "./Fileupload.js";
import ReactDatemask from "./ReactDatemask.js";
import Medicalhistory from "./Medicalhistory.js";
import NormalizePhone from "./NormalizePhone.js";
import PatientnameSuggestions from "./PatientnameSuggestions.js";

import Hideingwebcam from "./Hideingwebcam.js";

const validate = data => {
  const rules = {
    name: "required",
    email: "email",
    date: "date",
    input: "radio",
    Options: ""
  };

  const messages = {};

  const validator = new Validator(data, rules, messages);

  validator.passes();

  return validator.errors.all();
};

const renderField = ({
  input,
  label,

  Types,
  Medicalhistory,

  meta: { touched, error }
}) => {
  const wrapperClass = touched && error ? "input-box danger" : "input-box";
  return (
    <div className={wrapperClass}>
      <label className="input-label">{label}</label>
      <input {...input} placeholder={label} className="input-text-box" />
      {touched && error && <span className="input-status">{error}</span>}
    </div>

  );
};

const renderselectgroup = ({
  input,

  Types,
  meta: { touched, error }
}) => {
  return <SelectGroup field={input} />;
};

const rendermedicalhistroy = ({
  input,

  Types,
  meta: { touched, error }
}) => {
  return <Medicalhistory field={input} />;
};

const renderdatemask = ({ input, Types, meta: { touched, error } }) => {
  return <ReactDatemask field={input} />;
};

const renderselectgroupblood = ({ input, Types, meta: { touched, error } }) => {
  return <Bloodgroup field={input} />;
};

const renderoccupation = ({ input, Types, meta: { touched, error } }) => {
  return <Occupation field={input} />;
};

const renderlanguages = ({ input, Types, meta: { touched, error } }) => {
  return <Languagedrop field={input} />;
};

const renderReferredby = ({ input, Types, meta: { touched, error } }) => {
  return <Referredby field={input} />;
};

const renderpatientname = ({ input, Types, meta: { touched, error } }) => {
  return <PatientnameSuggestions field={input} />;
};

const PatientForm = props => {
  const { handleSubmit } = props;

  return (
    
    <div id="gg">

      <form onSubmit={handleSubmit}>
        <div className="modal-content">
          <div className="modal-header header-icon">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span className="icon" aria-hidden="true">
                <i className="fa fa-times-circle" />
              </span>
            </button>
            <h4 className="modal-title text-center" id="myModalLabel">
              <span className="icon head-icon">
                <i className="la la-user-plus" aria-hidden="true" />
              </span>
              Add Patient
            </h4>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-xs-12 col-sm-8">
                <div className="row">
                  <div className="col-xs-12 col-md-2">

                    {/*<div className="pat-img">*/}

                    <Hideingwebcam />
                    {/*<img className="avatar" alt="" src="images/user-img.jpg"/>*/}
                    {/*<div className="img-change">*/}
                    {/*<ul className="change-options">
                                                    <li className="option"><a href="#">Upload Photo</a></li>

                                                    <li className="option"><a href="#">Take a Picture</a></li>
                           </ul>*/}

                    {/*</div>*/}

                    {/*</div>*/}
                  </div>
                  <Fileupload />

                  {/*// <Patientnamedd />*/}

                  <div className="col-xs-12 col-md-10">
                    <div className="row">
                      <div className="col-xs-12 col-md-6">
                        <div className="input-box success">
                          <label className="input-label">Patient Name</label>
                          <Field
                            name="name"
                            type="text"
                            component={renderpatientname}
                          />

                        </div>

                      </div>
                      <div className="col-xs-12 col-md-6">
                        <div className="input-box">
                          <label className="input-label">practiceID</label>
                          <Field
                            name="practice_id"
                            type="text"
                            component={renderField}
                          />
                          <span className="input-status">
                            No caps in user name
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-md-6">
                        <div className="input-box radio-input-box">
                          <div>

                            <div className="input-box radio-input-box">
                              <label className="input-label">Gender</label>
                              <span className="radio-box">
                                <Field
                                  name="gender"
                                  component="input"
                                  type="radio"
                                  value="male"
                                />
                                <span />
                                Male
                              </span>
                              <span className="radio-box">
                                <Field
                                  name="gender"
                                  component="input"
                                  type="radio"
                                  value="female"
                                />
                                <span />
                                Female
                              </span>
                              <span className="radio-box">
                                <Field
                                  name="gender"
                                  component="input"
                                  type="radio"
                                  value="other"
                                />
                                <span />
                                Other
                              </span>
                              <span className="input-status">Error</span>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6">
                        <div className="input-box verify-success">
                          <label className="input-label">Mobile</label>
                          <div>
                            <Field
                              name="phone"
                              component={renderField}
                              type="text"
                              placeholder="Phone Number"
                              normalize={NormalizePhone}
                            />
                          </div>

                        </div>;

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-12 col-md-4">
                        <div className="input-box info">
                          <label className="input-label">DOB</label>

                          <Field
                            name="dob"
                            type="text"
                            component={renderdatemask}
                          />

                        </div>
                      </div>
                      <div className="col-xs-12 col-md-2">
                        <div className="input-box">
                          <label className="input-label">Age</label>

                          <Field
                            name="age"
                            type="text"
                            component={renderField}
                          />

                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6">
                        <div className="input-box danger">
                          <label className="input-label">Email</label>
                          <Field
                            name="email"
                            type="email"
                            component={renderField}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-md-6">
                        <div className="input-box">
                          <label className="input-label">Blood Group</label>
                          <Field
                            name="blood_group"
                            type="text"
                            component={renderselectgroupblood}
                          />
                        </div>
                      </div>

                      <div className="col-xs-12 col-md-6">
                        <div className="input-box verify-danger">
                          <label className="input-label">Aadhar ID</label>
                          <span className="verify-status">
                            Not Verified
                            {" "}
                            <span className="icon">
                              <i className="fa fa-times" />
                            </span>
                          </span>
                          <Field
                            name="uuid"
                            type="text"
                            component={renderField}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-md-6">
                        <div className="input-box">
                          <label className="input-label">Communication</label>
                          <textarea className="input-text-box" rows="5" />
                          <span className="input-status">
                            No caps in user name
                          </span>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6">
                        <div className="input-box">
                          <label className="input-label">City</label>
                          <Field
                            name="City"
                            type="text"
                            component={renderField}
                          />
                        </div>
                        <div className="input-box">
                          <label className="input-label">Pincode</label>

                          <Field
                            name="Pincode"
                            type="text"
                            component={renderField}
                          />
                        </div>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="detail-more"
                      data-toggle="modal"
                      data-target="#demo"
                    >
                      <span className="icon ">
                        <i className="la la-plus" aria-hidden="true" />
                      </span>
                      Add More details
                    </a>
                    <div id="demo" className="collapse">

                      <div className="pat-detail-more">
                        <div className="row">
                          <div className="col-xs-12 col-md-6">
                            <div className="input-box">
                              <label className="input-label">occupation</label>
                              <Field
                                name="occupation"
                                type="text"
                                component={renderoccupation}
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-md-6">
                            <div className="input-box ">
                              <label className="input-label">Referred By</label>
                              <Field
                                name="referrer"
                                type="text"
                                component={renderReferredby}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-md-6">
                            <div className="input-box">
                              <label className="input-label">
                                Secondary Mobile
                              </label>
                              <Field
                                name="SecondaryMobile"
                                type="text"
                                component={renderField}
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-md-6">
                            <div className="input-box">
                              <label className="input-label">Landline</label>
                              <Field
                                name="Landline"
                                type="text"
                                component={renderField}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-md-6">
                            <div className="input-box">
                              <label className="input-label">Language</label>
                              <Field
                                name="language"
                                type="text"
                                component={renderlanguages}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="input-box">
                  <label className="input-label">Groups</label>

                  <Field
                    name="groups"
                    type="text"
                    component={renderselectgroup}
                  />

                </div>
                <div className="input-box">
                  <label className="input-label">Medical History</label>

                  <Field
                    name="medical_histories"
                    type="text"
                    component={rendermedicalhistroy}
                  />
                  {/*<Medicalhistory />*/}

                </div>
              </div>

            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default btn-success-outline"
              data-dismiss="modal"
            >
              Cancel
            </button>
            {/*<button type="button" form="patient" className="btn btn-primary btn-success">Add Patient</button>*/}
            <SubmitButton form="patient" />
          </div>
        </div>
      </form>
    </div>
 
);


};

export default reduxForm({
  form: "patient",
  validate,
  onSubmit: submit
})(PatientForm);
