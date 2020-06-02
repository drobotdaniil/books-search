import React from 'react';

const RemoveBtn = props => (
  <button onClick={props.handleRemove} id={props.id}>
    Remove
  </button>
);

export default RemoveBtn;
