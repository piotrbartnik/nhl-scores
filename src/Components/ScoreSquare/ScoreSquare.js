import React, { Component } from 'react';
import classes from './ScoreSquare.module.css'

class ScoreSquare extends Component {

  
  render() {   
    return (
      <div className={classes.Square}> 
        {this.props.teamOne} - {this.props.scoreOne}: {this.props.scoreTwo} - {this.props.teamTwo}
      </div>
    );
  }
}

export default ScoreSquare;