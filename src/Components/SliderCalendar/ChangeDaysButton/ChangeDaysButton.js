import React from 'react';
import classes from './ChangeDaysButton.module.scss'

const changeDaysButton = (props) => {
  return (
    <button className={classes.ChangeDaysButton} onClick={props.changeDays}>Test</button>
  )
};

export default changeDaysButton;