import React from "react";
import PropTypes from "prop-types";

const ScheduleTab = ({ active, schedulecount, children, onClick }) => {
 
  let count = 0;
  Object.keys(schedulecount).forEach(function(key) {
    if(children.toUpperCase()==='SCHEDULED'){
        count=count+schedulecount[key].count;
    }
    else{
         if (children.toUpperCase() === schedulecount[key].name) {
              count = schedulecount[key].count;
          }
    }
   
   
  });

  let type = children.toLowerCase();
  let link = "#" + type;

  if (active) {
    return (
      <a
        className={type}
        href={link}
        aria-controls={type}
        role="tab"
        data-toggle="tab"
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
      >
        <h2>{count}</h2>
        {children}
      </a>
    );
  }

  return (
    <a
      className={type}
      href="#waiting"
      aria-controls={type}
      role="tab"
      data-toggle="tab"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      <h2>{count}</h2>
      {children}
    </a>
  );
};

ScheduleTab.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ScheduleTab;
