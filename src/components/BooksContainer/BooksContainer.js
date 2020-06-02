import React, { useState } from 'react';
import './BooksContainer.css';
import BookBlock from '../BookBlock/bookBlock';

const BooksContainer = props => {
  const [books, setBooks] = useState([]);

  const handleAdd = e => {
    const id = e.target.id;

    props.books.forEach(book => {
      const arr = [...books];
      if (id === book.id) {
        if (arr.find(item => item.id === id)) return;
        arr.push(book);
        setBooks(arr);
      }
    });
  };

  const handleRemove = e => {
    const id = e.target.id;

    const filtered = books.filter(book => book.id !== id);

    setBooks(filtered);
  };

  return (
    <div className='content'>
      <div className='content__item'>
        <h2 className='content-title'> Search result:</h2>
        <div className='content-output'>
          {props.books.map(book => {
            return (
              <BookBlock
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                description={sliceDesc(book.volumeInfo.description)}
                author={containAuthors(book.volumeInfo.authors)}
                image={book.volumeInfo.imageLinks.smallThumbnail}
                publishedDate={refreshDate(book.volumeInfo.publishedDate)}
                handleAdd={handleAdd}
                button={true}
              />
            );
          })}
        </div>
      </div>
      <div className='content__item'>
        <h2 className='content-title'>My list:</h2>
        <div className='content-output'>
          {books.map(book => {
            return (
              <BookBlock
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                description={sliceDesc(book.volumeInfo.description)}
                author={containAuthors(book.volumeInfo.authors)}
                image={book.volumeInfo.imageLinks.smallThumbnail}
                publishedDate={refreshDate(book.volumeInfo.publishedDate)}
                handleRemove={handleRemove}
                button={false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const containAuthors = arr => {
  return arr ? arr.join(', ') : 'Anonymus';
};

const refreshDate = str => {
  return str
    ? new Date(str).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    : '';
};

const sliceDesc = str => {
  if (str) return str.length > 200 ? str.slice(0, 200) + '...' : str;
};

export default BooksContainer;
