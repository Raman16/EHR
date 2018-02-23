import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NotificationSystem from "react-notification-system";
import { addNotification } from "./actions";

class Notification extends Component {
  componentDidMount() {
    this.notificationSystem = this.refs.notificationSystem;
  }

  componentWillReceiveProps(newProps) {
    const { message, level } = newProps.notification;
    const config = {
      message,
      level,
      position: "tc"
    };

    this.notificationSystem.addNotification(config);
  }

  render() {
    return <NotificationSystem ref="notificationSystem" />;
  }
}

const mapStateToProps = state => ({
  notification: state.notification
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addNotification }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
