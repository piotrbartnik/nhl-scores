import React from 'react';
import classes from './DateTiles.module.scss'

const dateTile = (props) => {
  return (
  <div className={classes.DateTiles} onClick={props.changeDate}>
    <div className={classes['DateTiles__Day']} >{props.dayName}</div>
    <div className={classes['DateTiles__Date']}>{props.dayDate} - {props.dayMonth} - {props.dayYear}</div>
  </div>)
};

export default dateTile;