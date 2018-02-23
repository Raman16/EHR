import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import { request } from "../../helpers";

var Mhistroydata = [];
var obj = {};
var Medicalhistory = createClass({
  propTypes: {
    hint: PropTypes.string,
    label: PropTypes.string
  },
  getInitialState() {
    request.get("medicalhistory").then(function(response) {
      console.log(response);

      response.data.forEach(function(item, i) {
        obj = { value: i, label: item.name, id: item.id };
        Mhistroydata.push(obj);
      });
      console.log(JSON.stringify(Mhistroydata));
    });

    return {
      multi: true,
      multiValue: [],
      options: Mhistroydata,

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

      </div>
    );
  }
});
export default Medicalhistory;
