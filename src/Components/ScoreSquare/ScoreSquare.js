import React, { Component } from 'react';
import classes from './ScoreSquare.module.css';
// import image from '../../assets/images/logos.png'

class ScoreSquare extends Component {


  render() {
    return (
      <div className={this.props.mounted ? [classes.Square, classes.Mounted].join(' ') : classes.Square}>
        <div className={classes.SquareMargin}>
          <div className={classes[`team${this.props.teamOneId}`]}></div>
          <div>{this.props.teamOne}</div>
        </div>
        <div>
        {this.props.scoreOne}: {this.props.scoreTwo}
        </div>
        <div className={classes.SquareMargin}>          
          <div className={classes[`team${this.props.teamTwoId}`]}></div>
          <div>{this.props.teamTwo}</div>
        </div>
      </div>
    );
  }
}

export default ScoreSquare;