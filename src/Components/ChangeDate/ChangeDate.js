import React, { Component } from 'react';

class ChangeDate extends Component {
  render() {
    return (
      <>
        <p>{this.props.randomDate}</p>
        <button onClick={this.props.changeDateFunc}>Change me </button>
      </>
    );
  }
}

export default ChangeDate;
