import React from 'react';
import PropTypes from 'prop-types';
import classes from './DateTiles.module.scss';

const dateTile = props => {
  const dateForDataAttribute = `${props.dayDate}-${props.dayMonth}-${props.dayYear}`;
  return (
    <div
      className={[
        classes.DateTiles,
        props.activeTile ? classes['DateTiles__Active'] : null,
      ].join(' ')}
      onClick={() => props.changeDate(props)}
      data-date={dateForDataAttribute}
    >
      <div
        className={classes['DateTiles__Day']}
        data-date={dateForDataAttribute}
      >
        {props.dayName}
      </div>
      <div
        id={props.keyData}
        className={classes['DateTiles__Date']}
        data-date={dateForDataAttribute}
      >
        {props.dayDate} - {props.dayMonth} - {props.dayYear}
      </div>
      <div
        className={classes['DateTiles__Date']}
        data-date={dateForDataAttribute}
      >
        {props.gamesOnDay
          ? props.gamesOnDay == 1
            ? `${props.gamesOnDay} game`
            : `${props.gamesOnDay} games`
          : '0 games'}
      </div>
    </div>
  );
};

dateTile.propTypes = { dayMonth: PropTypes.string };

export default dateTile;
