import React, { Component } from 'react';
import classes from './ScoreSquare.module.css';
// import image from '../../assets/images/logos.png'

class ScoreSquare extends Component {

  
  render() {   
    return (
      <div className={classes.Square}> 
        <div className={classes[`team${this.props.teamOneId}`]}>          
        </div>
        {this.props.teamOne} - {this.props.scoreOne}: {this.props.scoreTwo} - {this.props.teamTwo}
        <div className={classes[`team${this.props.teamTwoId}`]}></div>
      </div>
    );
  }
}

export default ScoreSquare;