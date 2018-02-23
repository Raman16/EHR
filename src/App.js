import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Notification } from "./components/notification";
import LoadingBar from "react-redux-loading-bar";
import Calendar from "./components/calendar";
import Patient from "./components/patient";
import Staff from "./components/staff";
import { Settings } from "./components/setting";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
//import Schedule from "./components/schedule";

class App extends Component {
  componentDidMount() {
    // post();
  }

  render() {
    return (
      <Router>
        <div className="prod-container sm-aside">
          <LoadingBar />
          <Notification />
          <Navigation />
          <Header />
          <section className="content-container">
            <Route exact path="/calendar" component={Calendar} />
            <Route path="/patient" component={Patient} />
            <Route path="/staff" component={Staff} />
            <Route path="/settings" component={Settings} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
