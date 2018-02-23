import React from "react";

const DoctorRow = props => {
  const { doctors } = props;
  const listItems = doctors.map((doctor, index) => {
    const color = doctor.color;
    const slotbg_color = {
      background: color
    };
    const checkbox_style = {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      opacity: 0,
      zIndex: 99,
      cursor: "pointer"
    };
    const imgurl = "images/" + doctor.image;

    return (
      <li className="calapp-list-box" key={index}>
        <div className="calsapp-select-check">
          <span className="list-uncheck">
            <i className="fa fa-square-o" aria-hidden="true" />
          </span>
          <span className="list-check">
            <i className="fa fa-check-square-o" aria-hidden="true" />
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            name="check_doctors[]"
            style={checkbox_style}
            onClick={e => props.onClick(e.target.checked, doctor.id)}
          />
        </div>
        <a className="calapp-detail" href="#">
          <div className="calapp-img">
            <img
              className="img-responsive"
              src={imgurl}
              alt="images/user_logo.jpg"
            />
          </div>
          <div className="calapp-name">
            <h5>
              {" "}{doctor.name}
            </h5>
            <h6>
              5{doctor.slot_available} slot available
            </h6>
          </div>
          <div className="calapp-status">
            <div className="identity-box" style={slotbg_color}>
              {doctor.patients_booked}
              <span className="identity-box1-span" />
            </div>
          </div>
        </a>
      </li>
    );
  });

  return (
    <ul className="calapp-lists">
      {listItems}
    </ul>
  );
};

export default DoctorRow;
