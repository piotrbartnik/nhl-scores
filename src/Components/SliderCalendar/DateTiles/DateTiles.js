import React from 'react';
import classes from './DateTiles.module.scss'

const dateTile = (props) => {
  const dayDateTable = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (<div className={classes.DateTiles}>{props.dayName}</div>)
};

export default dateTile;