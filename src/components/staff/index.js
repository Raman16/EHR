import React from 'react';
import DoctorList from './DoctorList';

const doctors = {
  "general" : [
    {
      "name": "Prabhash",
      "age": 25
    },
    {
      "name": "Sathish",
      "age": 21
    }
  ],
  "dental" : [
    {
      "name": "Raman",
      "age": 20
    },
    {
      "name": "Niyaz",
      "age": 22
    },
    {
      "name": "Reiah",
      "age": 23
    }
  ]
};

const Staff = () => (
  <div>
    <h2>Staff</h2>
    <p>
      Staff Page
    </p>

    <DoctorList doctors={doctors} />
   
  </div>
);

export default Staff;
