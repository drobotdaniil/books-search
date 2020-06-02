import React from 'react';
import './bookBlock.css';
import AddBtn from '../AddBtn/addBtn';
import RemoveBtn from '../RemoveBtn/removeBtn';

const BookBlock = props => {
  function CheckTypeButton(props) {
    const button = props.button;

    if (button) return <AddBtn id={props.id} handleAdd={props.handleAdd} />;
    return <RemoveBtn id={props.id} handleRemove={props.handleRemove} />;
  }

  return (
    <div className='book-block'>
      <h4 className='book-title'>{props.title}</h4>
      <h5 className='book-subtitle'>{props.subtitle}</h5>
      <div className='book-info'>
        <img src={props.image} className='book-image' alt='12333' />
        <div className='book-description'>
          <p>{props.description}</p>
          <div className='credits'>
            <p className='date'>{props.publishedDate}</p>
            <p className='writer'>{props.author}</p>
            <CheckTypeButton
              id={props.id}
              button={props.button}
              handleAdd={props.handleAdd}
              handleRemove={props.handleRemove}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookBlock;
