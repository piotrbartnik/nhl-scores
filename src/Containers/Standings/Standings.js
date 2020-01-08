import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Standings.module.scss';
import * as actions from '../../store/actions';
class Standings extends Component {
  componentDidMount() {
    this.props.getDataForStandingsTable();
  }

  render() {
    const dataBefore = this.props.standingsData.Metropolitan;
    console.log(dataBefore);
    return (
      <div>
        Table will be here
        <div className={classes.tableContainer}>
          <div className={classes.tableHeader}>
            {Object.keys(this.props.standingsData)[0]}
          </div>
          <div className={classes.tableStats}>
            <div>
              {dataBefore
                ? Object.keys(this.props.standingsData.Metropolitan[0])
                : 'test'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    standingsData: state.standingsData.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataForStandingsTable: () => dispatch(actions.fetchStandingsData()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Standings);
