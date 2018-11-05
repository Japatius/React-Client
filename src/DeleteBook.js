import React, { Component } from 'react';
import axios from 'axios';

class DeleteBook extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteInputValue = this.deleteInputValue.bind(this);
    this.state = {
      book_id: 1,
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  deleteInputValue(val) {
    this.setState({ book_id: val.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    const id = this.state.book_id;
    const { book_name, author, isbn } = this.state;
    window.location.reload();

    axios
      .delete('http://localhost:3000/books/' + id, {
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className="content">
        <h2>Delete Book</h2>
        <label>book_id:</label>
        <input
          type="number" name="book_id" onChange={this.deleteInputValue} value={this.state.uid} min="1" />
        <form onSubmit={this.handleSubmit}>

          <br/>
          <button className="button" type="submit">
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default DeleteBook;