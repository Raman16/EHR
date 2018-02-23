import React from 'react';
import { connect } from 'react-redux';
import { addSchedule } from './actions';

let AddSchedule = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addSchedule(input.value));
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">
          Add Schedule
        </button>
      </form>
    </div>
  );
};

AddSchedule = connect()(AddSchedule);

export default AddSchedule;
