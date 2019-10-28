import React from 'react';
import PropTypes from 'prop-types';
import classes from './ScoreSquare.module.scss';
// import image from '../../assets/images/logos.png'

const ScoreSquare = props => {
  return (
    <div
      className={
        props.mounted
          ? [classes.Square, classes.flipcard, classes.Mounted].join(' ')
          : classes.Square
      }
    >
      <div className={classes['flipcard__inner']}>
        <div className={classes['flipcard__front']}>
          <div className={classes.TeamContainer}>
            <div className={classes[`team${props.teamOneId}`]}></div>
            <div className={classes.TeamName}>{props.teamOne}</div>
          </div>
          <div className={classes.ScoreContainer}>
            {props.scoreOne} : {props.scoreTwo}
          </div>
          <div className={classes.TeamContainer}>
            <div className={classes[`team${props.teamTwoId}`]}></div>
            <div className={classes.TeamName}>{props.teamTwo}</div>
          </div>
        </div>
        <div className={classes['flipcard__back']}>
          {props.venue}- to change
        </div>
      </div>
    </div>
  );
};

ScoreSquare.propTypes = {
  teamOneId: PropTypes.number,
  teamTwoId: PropTypes.number,
  teamOne: PropTypes.string,
  teamTwo: PropTypes.string,
  venue: PropTypes.string,
};

export default ScoreSquare;
