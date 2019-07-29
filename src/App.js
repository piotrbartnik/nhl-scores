import React, { Component } from "react";
import "./App.css";
import GamesContainer from './Containers/GamesContainer/GamesContainer';
import Calendar from 'react-calendar';
import ChangeDate from './Components/ChangeDate/ChangeDate'

import { createStore } from 'redux';
import setDate from './store/reducers/reducer';

class App extends Component {
  state = {
    date: new Date(),
    randomDate: 'test2'
  }

  clicked = () => console.log(this.state.date)


  onChange = date => {
    this.setState({ date })
  }

  changeDateFunc = () => {
    const randomMonth = Math.ceil(Math.random() * 12);
    const randomDay = Math.ceil(Math.random() * 12);
    const randomDate = `2018-${randomMonth}-${randomDay}`
    this.setState({randomDate: randomDate})
    console.log(this.state.randomDate)
  }

  render() {
    return (<div>
      <Calendar
        onChange={this.onChange}
        value={this.state.date}
        onClick={this.clicked()}
      />
      <GamesContainer />
      <br/>
        <div>
        <ChangeDate randomDate={this.state.randomDate} changeDateFunc={this.changeDateFunc}/>
        </div>
    </div>
    );
  }
}

export default App;