import React, { Component } from "react";
import classes from "./ScoreSquare.module.scss";
// import image from '../../assets/images/logos.png'

class ScoreSquare extends Component {
  render() {
    return (
      <div
        className={
          this.props.mounted
            ? [classes.Square, classes.Mounted].join(" ")
            : classes.Square
        }
      >
        <div className={classes.TeamContainer}>
          <div className={classes[`team${this.props.teamOneId}`]}></div>
          <div className={classes.TeamName}>{this.props.teamOne}</div>
        </div>
        <div className={classes.ScoreContainer}>
          {this.props.scoreOne} : {this.props.scoreTwo}
        </div>
        <div className={classes.TeamContainer}>
          <div className={classes[`team${this.props.teamTwoId}`]}></div>
          <div className={classes.TeamName}>{this.props.teamTwo}</div>
        </div>
      </div>
    );
  }
}

export default ScoreSquare;
