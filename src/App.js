import React, { Component } from "react";
import "./App.css";
import GamesContainer from './Containers/GamesContainer/GamesContainer';
import Calendar from 'react-calendar';

class App extends Component {
  state = {
    date: new Date(),
  }

  clicked = () => console.log(this.state.date)
 
  onChange = date => this.setState({ date })
  render() {
    return (<div>`
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