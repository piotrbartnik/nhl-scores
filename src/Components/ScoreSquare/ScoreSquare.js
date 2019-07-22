import React, { Component } from 'react';

class ScoreSquare extends Component {

  
  render() {
    return (
      <div>
        {this.props.teamOne} - {this.props.scoreOne}: {this.props.scoreTwo} - {this.props.teamTwo}
      </div>
    );
  }
}

export default ScoreSquare;