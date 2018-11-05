import React, { Component } from 'react';
import axios from 'axios';

class UpdateBorrower extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
      book_id: 1,
      book_name: '',
      author: '',
      isbn:''
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  updateInputValue(val) {
    this.setState({ book_id: val.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    const id = this.state.book_id;
    const { firstname, lastname, phone, streetAddress, postalCode } = this.state;
    window.location.reload();

    axios
      .put('http://localhost:3000/borrowers/' + id, {
        firstname,
        lastname,
        phone,
        streetAddress,
        postalCode
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className="content">
        <h2>Update Borrower</h2>
        <label>borrower_id:</label>
        <input
          type="number" name="borrower_id" onChange={this.updateInputValue} value={this.state.uid} min="1" />
        <form onSubmit={this.handleSubmit}>
          <label>
            First:
            <input type="text" name="firstname" value={this.state.className}  onChange={this.onChange}/>
          </label>
          <br/>
          <label>
            Lastname:
            <input type="text" name="lastname" onChange={this.onChange} />
          </label>
          <br/>
          <label>
            Phone:
          <input type="text" name="phone" onChange={this.onChange} />
          </label>
            <br/>
            <label>
            Street Address:
          <input type="text" name="streetAddress" onChange={this.onChange} />
          </label>
            <br/>
            <label>
            Postal Code:
          <input type="text" name="postalCode" onChange={this.onChange} />
          </label>
            <br/>
          <button className="button" type="submit">
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateBorrower;