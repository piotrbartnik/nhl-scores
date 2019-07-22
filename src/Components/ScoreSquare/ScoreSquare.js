import React, { Component } from 'react';
import classes from './ScoreSquare.module.css'

class ScoreSquare extends Component {

  
  render() {
    const pStyle = {
      fontSize: '15px',
      textAlign: 'center'
    };
    return (
      <div className={classes.Square} style={pStyle}> 
        {this.props.teamOne} - {this.props.scoreOne}: {this.props.scoreTwo} - {this.props.teamTwo}
      </div>
    );
  }
}

export default ScoreSquare;