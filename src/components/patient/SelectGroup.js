import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import { request } from "../../helpers";

var Groupdata = [];
var obj = {};

var SelectGroup = createClass({
  propTypes: {
    hint: PropTypes.string,
    label: PropTypes.string
  },

  getInitialState() {
    request.get("group").then(function(response) {
      console.log(response);

      response.data.forEach(function(item, i) {
        obj = { value: i, label: item.name, id: item.id };
        Groupdata.push(obj);
      });
      console.log(JSON.stringify(Groupdata));
    });

    return {
      multi: true,
      multiValue: [],
      options: Groupdata,
      value: undefined
    };
  },

  handleOnChange(value) {
    const { multi } = this.state;
    if (multi) {
      this.setState({ multiValue: value });
    } else {
      this.setState({ value });
    }
  },

  render() {
    const { multi, options } = this.state;

    return (
      <div>

        <Select.Creatable
          multi={multi}
          options={options}
          value={this.props.field.value}
          onChange={this.props.field.onChange}
        />
        <div className="hint">{this.hint}</div>
        <div className="checkbox-list">
          <label className="checkbox" />
          <label className="checkbox" />
        </div>
      </div>
    );
  }
});

export default SelectGroup;
