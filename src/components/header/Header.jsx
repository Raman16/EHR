import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="top-header">
        <ul className="top-header-menu">
          <li className="small-menu-item">
            <a id="side-menu" href="">
              <i className="la la-bars" aria-hidden="true" />
            </a>
          </li>
          <li className="search-menu-item">
            <div className="app-search">
              <input
                id="app-search-input"
                className="prompt"
                type="text"
                placeholder="Search..."
              />
              <div className="results">
                <ul className="search-result-list">
                  <li className="search-result-group">
                    <div className="result-group">
                      Patient
                    </div>
                    <div className="group-result">
                      <ul className="group-result-list">
                        <li className="search-result">
                          <a className="" href="">
                            <div className="result-img">
                              <img
                                className="img-responsive"
                                src="images/user-img.jpg"
                                alt=""
                              />
                            </div>
                            <div className="result-detail">
                              <h4>Niyaz Hussain</h4>
                              <h5>
                                IDPAT98734590
                                <span className="pull-right">Patient</span>
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="search-result">
                          <a className="" href="">
                            <div className="result-img">
                              <img
                                className="img-responsive"
                                src="images/user-img.jpg"
                                alt=""
                              />
                            </div>
                            <div className="result-detail">
                              <h4>Sathish</h4>
                              <h5>
                                IDPAT95464670
                                <span className="pull-right">Patient</span>
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="search-result">
                          <a className="" href="">
                            <div className="result-img">
                              <img
                                className="img-responsive"
                                src="images/user-img.jpg"
                                alt=""
                              />
                            </div>
                            <div className="result-detail">
                              <h4>Sathish</h4>
                              <h5>
                                IDPAT95464670
                                <span className="pull-right">Patient</span>
                              </h5>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="search-result-group">
                    <div className="result-group">
                      Doctor
                    </div>
                    <div className="group-result">
                      <ul className="group-result-list">
                        <li className="search-result">
                          <a className="" href="">
                            <div className="result-img">
                              <img
                                className="img-responsive"
                                src="images/user-img.jpg"
                                alt=""
                              />
                            </div>
                            <div className="result-detail">
                              <h4>Vijay D</h4>
                              <h5>
                                IDPAT98734590
                                <span className="pull-right">Doctor</span>
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="search-result">
                          <a className="" href="">
                            <div className="result-img">
                              <img
                                className="img-responsive"
                                src="images/user-img.jpg"
                                alt=""
                              />
                            </div>
                            <div className="result-detail">
                              <h4>Saravana Kumar</h4>
                              <h5>
                                IDPAT95464670
                                <span className="pull-right">Doctor</span>
                              </h5>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="small-menu-item drop-down">
            <a href="">
              <i className="la la-ellipsis-h" aria-hidden="true" />
            </a>
            <div className="head-dropdown-menu left ">
              <ul className="short-link-menu">
                <li>
                  <a href="" className="text-center">
                    <span><i className="la la-user" aria-hidden="true" /></span>
                    Profile
                  </a>
                </li>
                <li>
                  <a href="" className="text-center">
                    <span><i className="la la-cog" aria-hidden="true" /></span>
                    Account
                  </a>
                </li>
                <li>
                  <a href="" className="text-center">
                    <span><i className="la la-user" aria-hidden="true" /></span>
                    Profile
                  </a>
                </li>
                <li>
                  <a href="" className="text-center">
                    <span><i className="la la-cog" aria-hidden="true" /></span>
                    Account
                  </a>
                </li>
                <li>
                  <a href="" className="text-center">
                    <span><i className="la la-user" aria-hidden="true" /></span>
                    Profile
                  </a>
                </li>
                <li>
                  <a href="" className="text-center">
                    <span><i className="la la-cog" aria-hidden="true" /></span>
                    Account
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="small-menu-item drop-down">
            <a href=" "><i className="la la-plus" aria-hidden="true" /></a>
            <div className="head-dropdown-menu left">
              <ul className="dropdown-list">
                <li>
                  <a href="">
                    <span className="icon">
                      <i className="la la-plus" aria-hidden="true" />
                    </span>
                    {" "}
                    Add New Patient
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="icon">
                      <i className="la la-plus" aria-hidden="true" />
                    </span>
                    {" "}
                    Add New Appointment
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="small-menu-item drop-down">
            <a href="">
              <i className="la la-bell-o" aria-hidden="true" />
              <span className="badge">10</span>
            </a>
            <div className="head-dropdown-menu left">
              <div className="drop-menu-head">
                <a href="" className="pull-right">Mark all as read</a>
                <h5>5 New Notifications</h5>
              </div>
              <ul className="notification-list">
                <li>
                  <div className="notif-container">
                    <div className="notif-image-box">
                      <div className="notif-user-image">
                        <img
                          className="img-responsive"
                          src="images/user-img.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="notif-detail">
                      <h5>
                        <a href="">Lorem Ipsum</a>
                        <span className="pull-right">2 days ago</span>
                      </h5>
                      <h6>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="notif-container">
                    <div className="notif-image-box">
                      <div className="notif-user-image">
                        <img
                          className="img-responsive"
                          src="images/user-img.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="notif-detail">
                      <h5>
                        <a href="">Lorem Ipsum</a>
                        <span className="pull-right">2 days ago</span>
                      </h5>
                      <h6> is simply dummy text</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="notif-container">
                    <div className="notif-image-box">
                      <div className="notif-user-image">
                        <img
                          className="img-responsive"
                          src="images/user-img.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="notif-detail">

                      <h5>
                        <a href="">Lorem Ipsum</a>
                        <span className="pull-right">2 days ago</span>
                      </h5>
                      <h6> is simply dummy text</h6>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="notif-more">
                <a href="" className="text-center">Read More</a>
              </div>
            </div>
          </li>
          <li className="small-menu-item">
            <a className="right-menu" href="">
              <i className="la la-commenting-o" aria-hidden="true" />
              <span className="badge">43</span>
            </a>
          </li>
          <li className="user-menu-item drop-down">
            <a href="">
              <div className="user-detail-box">
                <div className="user-image">
                  <img className="img-responsive" src="images/user-img.jpg" alt="" />
                </div>
                <div className="User-name">
                  <span className="drop-icon pull-right">
                    <i className="la la-angle-down" aria-hidden="true" />
                  </span>
                  <h4 className="hidden-xs hidden-sm">Ajey Vignesh</h4>
                  <h5 className="hidden-xs hidden-sm">Doctor</h5>
                </div>
              </div>
            </a>
            <div className="head-dropdown-menu left">
              <div className="prof-img-change">
                <a href="" className="change-user-image">
                  <img src="images/user-img.jpg" alt="" />
                  <span className="text-center">Change Image</span>
                </a>
                <h4 className="hidden-md hidden-lg text-center">Ajey Vignesh</h4>
                <h5 className="hidden-md hidden-lg text-center">Doctor</h5>
              </div>
              <ul className="user-set-menu">
                <li>
                  <a href="">
                    <i className="la la-user" aria-hidden="true" /> Profile Settting
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="la la-cog" aria-hidden="true" /> Account Settting
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="la la-lock" aria-hidden="true" /> Lock
                  </a>
                  <a href="">
                    <i className="la la-sign-out" aria-hidden="true" /> Logout
                  </a>
                  <span className="clearfix" />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
