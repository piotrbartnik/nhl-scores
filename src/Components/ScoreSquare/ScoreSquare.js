import React, { Component } from 'react';
import classes from './ScoreSquare.module.css';

class ScoreSquare extends Component {

  
  render() {   
    return (
      <div className={classes.Square}> 
        <div className={classes[`team${this.props.teamOneId}`]}>          
        </div>
        {this.props.teamOne} - {this.props.scoreOne}: {this.props.scoreTwo} - {this.props.teamTwo}
        <div className={classes[`team${this.props.teamOneId}`]}></div>
      </div>
    );
  }
}

export default ScoreSquare;