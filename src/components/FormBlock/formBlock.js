import React, { Component } from 'react';
import './formBlock.css';
import Input from '../Input/input';
import SearchBtn from '../SearchBtn/search-btn';

class FormBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='form' onSubmit={this.props.getData}>
        <Input handleInput={this.props.handleInput} />
        <SearchBtn />
      </form>
    );
  }
}

export default FormBlock;
