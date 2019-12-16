import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
class Standings extends Component {
  componentDidMount() {
    this.props.getDataForStandingsTable();
  }

  render() {
    return <div>Table will be here</div>;
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
