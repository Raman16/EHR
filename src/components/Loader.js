import React, { Component } from "react";
/*
const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
);

const LoadingHOC = (loadingProp) => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    componentDidMount(){
      this.startTimer = Date.now();
    }

    componentWillUpdate(nextProps){
      if(!isEmpty(nextProps[loadingProp])) {
        this.endTimer = Date.now();
      }
    }

    render() {
      const myProps = {
        loadingTime: ((this.endTimer - this.startTimer)/1000).toFixed(2),
      };

      return isEmpty(this.props[loadingProp]) ? <div className="loader" /> : <WrappedComponent {...this.props} {...myProps}/>;
    }
  }
}
*/

const Loader = WrappedComponent => {
  return class extends Component {
    componentWillReceiveProps(nextProps) {
      console.log("Current props: ", this.props);
      console.log("Next props: ", nextProps);
    }

    render() { console.log(this.props);
      return this.props.schedules.length === 0
        ? <div>Loading...</div>
        : <WrappedComponent {...this.props} />;
    }
  };
};

export default Loader;
