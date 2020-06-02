import React from 'react';

const AddBtn = props => (
  <button onClick={props.handleAdd} id={props.id}>
    Add
  </button>
);

export default AddBtn;
