import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";

const Types = [
  { label: "Engineer", value: "Engineer" },
  { label: "Clerk", value: "Clerk" },
  { label: "Driver", value: "Driver" },
  { label: "Businessman", value: "Businessman" },
  { label: "Cricketer", value: "Cricketer" }
];

var Occupation = createClass({
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
  DropdownonChange(value) {
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

export default Occupation;
