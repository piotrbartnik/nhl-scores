import React, { Component } from "react";
import "./App.css";
import GamesContainer from './Containers/GamesContainer/GamesContainer';
import Calendar from 'react-calendar';

import { createStore } from 'redux';
import setDate from './store/reducers/reducer';

class App extends Component {
  state = {
    date: new Date()
  }

  clicked = () => console.log(this.state.date)

  // onChange = date => {
  //   let clickedDate = new Date(date).toLocaleDateString('us-US').replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
  //   this.setState({ clickedDate });
  // }

  onChange = date => {
    this.setState({ date })
  }

  render() {
    return (<div>
      <Calendar
        onChange={this.onChange}
        value={this.state.date}
        onClick={this.clicked()}
      />
      <GamesContainer />
    </div>
    );
  }
}

export default App;