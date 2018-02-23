import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import { addNotification } from "../notification/actions";

const Types = [
  { label: "JustDial", value: "J" },
  { label: "Google", value: "G" },
  { label: "Facebook", value: "F" },
  { label: "Newspaper", value: "N" },
  { label: "Tv", value: "T" },
  { label: "Another Patient", value: "A" }
];

var Referredby = createClass({
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
  DropdownOnChange(value) {
    this.setState({ value });
    addNotification("Schedule status successfully changed!", "success");
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
export default Referredby;
