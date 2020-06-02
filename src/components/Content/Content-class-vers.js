import React, { Component } from "react";
import FormBlock from "../FormBlock/formBlock";
import BooksContainer from "../BooksContainer/BooksContainer";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      inputValue: ""
    };
  }

  handleInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  getData = e => {
    e.preventDefault();

    if (this.state.inputValue.trim().length === 0) return;

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.inputValue}`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({ books: data.items });
        console.log(data);
      })
      .catch(() => {
        console.log("err");
      });
  };

  render() {
    return (
      <div>
        <FormBlock handleInput={this.handleInput} getData={this.getData} />
        <BooksContainer books={this.state.books} />
      </div>
    );
  }
}

export default Content;
