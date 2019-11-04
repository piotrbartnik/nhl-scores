import React from 'react';
import PropTypes from 'prop-types';
import classes from './ChangeDaysButton.module.scss';

const changeDaysButton = props => {
  return (
    <button
      className={classes.ChangeDaysButton}
      onClick={props.changeMiddleTileDate}
    >
      {props.arrowDirection === 'left' ? (
        <i className={classes.left}></i>
      ) : (
        <i className={classes.right}></i>
      )}
    </button>
  );
};

changeDaysButton.propTypes = {
  arrowDirection: PropTypes.string,
  changeMiddleTileDate: PropTypes.func,
};

export default changeDaysButton;
