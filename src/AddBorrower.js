import React, { Component } from 'react';
import axios from 'axios';

class AddBorrower extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      borrower_id: '',
      firstname: '',
      phone: '',
      streetAddress: '',
      postalCode: ''
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = event => {
    event.preventDefault();
    window.location.reload();

    const { borrower_id, firstname, lastname, phone, streetAddress, postalCode } = this.state;

    axios
      .post('http://localhost:3000/borrowers', { borrower_id, firstname, lastname, phone, streetAddress, postalCode })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className="content">
        <h2>Add Borrower</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            borrower_id:
            <input type="number" name="borrower_id" onChange={this.onChange} />
            </label>
            <br/>
            <label>
            Name:
            <input type="text" name="firstname" onChange={this.onChange} />
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
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddBorrower;