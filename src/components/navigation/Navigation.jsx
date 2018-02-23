import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <aside className="nav-aside">
        <section className="brand-logo-section">
          <div className="pattern-overlay">
            <div className="brand-logo-box">
              <div className="brand-logo-container">
                <div className="logo-img">
                  <img
                    className="img-responsive"
                    src="images/logo.png"
                    alt="logo"
                  />
                </div>
                <div className="brand-name">
                  <h3>Medrixo Health</h3>
                  <h5>Seamless intelligence</h5>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </section>
        <section className="left-menu-section">
          <ul id="med-menu" className="vertical-menu-ul">
            <li className="active">
              <Link to="/calendar">
                <span>
                  <i className="la la-calendar" aria-hidden="true" />
                </span>
                <div className="menu-tooltip">Calendar</div>
              </Link>
            </li>
            <li>
              <Link to="/patient">
                <span>
                  <i className="la la-users" aria-hidden="true" />
                </span>
                <div className="menu-tooltip">Patient</div>
              </Link>
            </li>
            <li>
              <Link to="/staff">
                <span>
                  <i className="la la-user-md" aria-hidden="true" />
                </span>
                <div className="menu-tooltip">Staff</div>
              </Link>
            </li>
            <li>
              <a href="#lab">
                <span>
                  <i className="la la-flask" aria-hidden="true" />
                </span>
                <div className="menu-tooltip">Lab</div>
              </a>
            </li>
            <li>
              <a href="#billing">
                <span>
                  <i className="la la-credit-card" aria-hidden="true" />
                </span>
                <div className="menu-tooltip">Billing</div>
              </a>
            </li>
            <li>
              <a href="#prescription">
                <span>
                  <i className="la la-file-text" aria-hidden="true" />
                </span>
                <div className="menu-tooltip">Prescription</div>
              </a>
            </li>
            <li>
              <a href="#inventory">
                <span>
                  <i className="la la-archive" aria-hidden="true" />
                </span>
                <div className="menu-tooltip">Inventory</div>
              </a>
            </li>
            <li>
              <a href="#reports">
                <span>
                  <i className="la la-bar-chart" aria-hidden="true" />
                </span>
                <div className="menu-tooltip">Reports</div>
              </a>
            </li>
            <li>
              {/*<a href="#settings">
                <span><i className="la la-cog" aria-hidden="true" /></span>
                <div className="menu-tooltip">Settings</div>*/}
              {/*</a>*/}

              <li>
              <Link to="/settings">
                <span><i className="la la-user-md" aria-hidden="true" /></span>
                <div className="menu-tooltip">settings</div>
              </Link>

            </li>
            </li>
          </ul>
        </section>
        <section className="sub-menu-section">
          <ul id="med-submenu" className="vertical-submenu-list">
            <li id="patient" className="active">
              <ul className="vertical-submenu-ul">
                <li className="active">
                  <a href="index.html">
                    <span className="submenu-icon">
                      <i className="la la-users" aria-hidden="true" />
                    </span>
                    Patient List
                  </a>
                </li>
              </ul>
            </li>
            <li id="staff">
              <ul className="vertical-submenu-ul">
                <li className="active">
                  <a href="doctor.html">
                    <span className="submenu-icon">
                      <i className="la la-user-md" aria-hidden="true" />
                    </span>
                    Doctors
                  </a>
                </li>
                <li>
                  <a href="staff.html">
                    <span className="submenu-icon">
                      <i className="la la-user-secret" aria-hidden="true" />
                    </span>
                    Other Staffs
                  </a>
                </li>
              </ul>
            </li>
            <li id="lab">
              <ul className="vertical-submenu-ul">
                <li className="active">
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-flask" aria-hidden="true" />
                    </span>
                    Order
                  </a>
                </li>
              </ul>
            </li>
            <li id="billing">
              <ul className="vertical-submenu-ul">
                <li className="active">
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-file-text" aria-hidden="true" />
                    </span>
                    Invoice
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-money" aria-hidden="true" />
                    </span>
                    Payments
                  </a>
                </li>
              </ul>
            </li>
            <li id="prescription">
              <ul className="vertical-submenu-ul">
                <li className="active">
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-file-text" aria-hidden="true" />
                    </span>
                    Orders
                  </a>
                </li>
              </ul>
            </li>
            <li id="inventory">
              <ul className="vertical-submenu-ul">
                <li className="active">
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-plus" aria-hidden="true" />
                    </span>
                    New Item
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-cube" aria-hidden="true" />
                    </span>
                    Add Stock
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-cubes" aria-hidden="true" />
                    </span>
                    Consume Stock
                  </a>
                </li>
              </ul>
            </li>
            <li id="reports">
              <ul className="vertical-submenu-ul">
                <li className="active">
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-credit-card" aria-hidden="true" />
                    </span>
                    Payments
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-money" aria-hidden="true" />
                    </span>
                    Amount Due
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-inr" aria-hidden="true" />
                    </span>
                    Expences
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-users" aria-hidden="true" />
                    </span>
                    Patients
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-calendar" aria-hidden="true" />
                    </span>
                    Appointment
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-university" aria-hidden="true" />
                    </span>
                    Income
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-clock-o" aria-hidden="true" />
                    </span>
                    Daily Summary
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-archive" aria-hidden="true" />
                    </span>
                    Inventory
                  </a>
                </li>
              </ul>
            </li>
            <li id="settings">
              <ul className="vertical-submenu-ul">
                <li className="active">
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-calendar" aria-hidden="true" />
                    </span>
                    Calendar
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-phone" aria-hidden="true" />
                    </span>
                    Communication
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-book" aria-hidden="true" />
                    </span>
                    Catalogue
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-shield" aria-hidden="true" />
                    </span>
                    Security
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-print" aria-hidden="true" />
                    </span>
                    Printouts
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-share" aria-hidden="true" />
                    </span>
                    Share
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-tag" aria-hidden="true" />
                    </span>
                    Auto ID Generation
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-users" aria-hidden="true" />
                    </span>
                    Patient Groups
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="submenu-icon">
                      <i className="la la-credit-card" aria-hidden="true" />
                    </span>
                    Billing
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <div className="clearfix" />
      </aside>
    );
  }
}

export default Navigation;
