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
            <div className={classes.tableTitles}>
              {/* {dataBefore
                ? Object.keys(this.props.standingsData.Metropolitan[0])
                : 'test'} */}
              <div>GP</div>
              <div>W</div>
              <div>L</div>
              <div>OT</div>
              <div>PTS</div>
              <div>ROW</div>
              <div>SOW</div>
              <div>SOL</div>
              <div>HOME</div>
              <div>AWAY</div>
              <div>GF</div>
              <div>GA</div>
              <div>DIFF</div>
              <div>L10</div>
              <div>STRK</div>
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
