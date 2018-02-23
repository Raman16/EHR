import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import createClass from "create-react-class";
import PropTypes from "prop-types";

const Types = [
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B-" },
  { label: "AB+", value: "AB-" }
];

var Bloodgroup = createClass({
  displayName: "MultiSelectField",
  propTypes: {
    hint: PropTypes.string,
    label: PropTypes.string
  },
  getInitialState() {
    return {
      disabled: false,
      crazy: false,
      options: Types
    };
  },
  handleSelectChange(value) {
    console.log("You've selected:", value);
    this.setState({ value });
  },
  render() {
    return (
      <div>

        <Select
          disabled={this.state.disabled}
          options={this.state.options}
          value={this.props.field.value}
          onChange={this.props.field.onChange}
        />

      </div>
    );
  }
});
export default Bloodgroup;
