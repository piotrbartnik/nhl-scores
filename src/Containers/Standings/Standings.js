import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
class Standings extends Component {
  componentDidMount() {
    this.props.getDataForStandingsTable();
  }

  render() {
    console.log(this.props.standingsData);
    return <div>Table will be here</div>;
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
