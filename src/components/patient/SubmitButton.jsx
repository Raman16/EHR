import React from "react";
import { connect } from "react-redux";
import { submit } from "redux-form";

// const style = {
//   padding: "10px 20px",
//   width: 140,
//   display: "block",
//   margin: "20px auto",
//   fontSize: "16px"
// };

const SubmitButton = ({ form, dispatch }) => (
  <button
    type="button"
    className="btn btn-primary btn-success"
    onClick={() => dispatch(submit(form))}
  >
    Add Patient
  </button>
);

export default connect()(SubmitButton);
