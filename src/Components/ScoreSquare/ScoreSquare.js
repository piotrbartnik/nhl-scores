import React, { Component } from 'react';
import classes from './ScoreSquare.module.css'

class ScoreSquare extends Component {

  
  render() {   
    return (
      <div className={classes.Square}> 
        <p>{this.props.teamOneId}</p>{this.props.teamOne} - {this.props.scoreOne}: {this.props.scoreTwo} - {this.props.teamTwo}<p>{this.props.teamTwoId}</p>
      </div>
    );
  }
}

export default ScoreSquare;