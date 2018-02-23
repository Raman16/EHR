import React from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import createClass from "create-react-class";
import PropTypes from "prop-types";

const Languages = [
  { label: "English", value: "English" },
  { label: "Telugu", value: "Telugu" },
  { label: "Hindi", value: "Hindi" },
  { label: "Tamil", value: "Tamil" },
  { label: "Kannada", value: "Kannada" },
  { label: "Urdu", value: "Urdu" }
];

var Languagedrop = createClass({
  propTypes: {
    hint: PropTypes.string,
    label: PropTypes.string
  },
  getInitialState() {
    return {
      disabled: false,
      crazy: false,
      options: Languages
    };
  },
  DropdownSelectChange(value) {
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

export default Languagedrop;
