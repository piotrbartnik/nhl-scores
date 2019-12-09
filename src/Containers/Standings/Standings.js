import React from 'react';
import ReactTable from 'react-table';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import 'react-table/react-table.css';
import classes from './Standings.module.scss';
class Standings extends Component {
  componentDidMount() {
    this.props.getDataForStandingsTable();
  }

  render() {
    const data = [];

    return (
      <ReactTable
        className={classes.table}
        data={data}
        columns={[
          {
            Header: 'Rank',
          },
          {
            Header: 'Team',
          },
          {
            Header: 'GP',
          },
          {
            Header: 'W',
          },
          {
            Header: 'L',
          },
          {
            Header: 'OT',
          },
          {
            Header: 'GS',
          },
          {
            Header: 'GL',
          },
          {
            Header: 'PTS',
          },
        ]}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDataForStandingsTable: () => dispatch(actions.fetchStandingsData()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Standings);
