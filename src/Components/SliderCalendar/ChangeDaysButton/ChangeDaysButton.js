import React from 'react';
import PropTypes from 'prop-types';
import classes from './ChangeDaysButton.module.scss';

const changeDaysButton = props => {
  return (
    <button className={classes.ChangeDaysButton} onClick={props.changeDays}>
      {props.arrowDirection === 'left' ? (
        <i className="fas fa-chevron-left"></i>
      ) : (
        <i className="fas fa-chevron-right"></i>
      )}
    </button>
  );
};

changeDaysButton.propTypes = {
  arrowDirection: PropTypes.string,
  changeDays: PropTypes.func,
};

export default changeDaysButton;
