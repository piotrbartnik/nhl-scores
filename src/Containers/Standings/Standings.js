import React from 'react';
import ReactTable from 'react-table';
import classes from './../../../node_modules/react-table/react-table.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
class Standings extends Component {
  componentDidMount() {
    this.props.getDataForStandingsTable();
  }

  render() {
    const data = [
      {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        },
      },
    ];

    return (
      <ReactTable
        data={data}
        columns={[
          {
            Header: 'Name',
            columns: [
              // {
              //   Header: 'Checkbox',
              //   Cell: row => <input type="checkbox" />,
              // },
              {
                Header: 'First Name',
                accessor: 'firstName',
              },
              {
                Header: 'Last Name',
                id: 'lastName',
                accessor: d => d.lastName,
              },
            ],
          },
          {
            Header: 'Info',
            columns: [
              {
                Header: 'Age',
                accessor: 'age',
              },
              {
                Header: 'Status',
                accessor: 'status',
              },
            ],
          },
          {
            Header: 'Stats',
            columns: [
              {
                Header: 'Visits',
                accessor: 'visits',
              },
            ],
          },
        ]}
        defaultPageSize={10}
        className={classes['rt-thead']}
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
