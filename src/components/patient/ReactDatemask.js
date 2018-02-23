import React, { Component } from "react";

import MaskInput from "react-maskinput";

class ReactDatemask extends Component {
  state = {
    maskString: "DD/MM/YYYY",
    mask: "00/00/0000"
  };

  onChange(value) {
    this.setState({
      maskString: "DD/MM/YYYY",
      mask: "00/00/0000",
      Validate: "00/02/1255"
    });
  }

  render() {
    return (
      <MaskInput
        maskString={this.state.maskString}
        value={this.props.field.value}
        mask={this.state.mask}
        onChange={this.props.field.onChange}
        alwaysShowMask
      />
    );
  }
}

export default ReactDatemask;
