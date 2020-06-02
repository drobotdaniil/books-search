import React from 'react';
import './input.css'

const Input = (props) => {
  return (
    <input type='text' className='form__input' onChange={props.handleInput}/>
  )
}

export default Input;