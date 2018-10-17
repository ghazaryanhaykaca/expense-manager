import React, { Component } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import Main from './components/Main';
import Modal from './components/Modal'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'dashboard'
    };

    this.menuClickHandler = this.menuClickHandler.bind(this);
  }

  menuClickHandler(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    return (
      <div className="App">
        <aside>
          <MenuItem page="dashboard" menuClickHandler={this.menuClickHandler}/>
          <MenuItem page="records" menuClickHandler={this.menuClickHandler}/>
          <MenuItem page="graphic" menuClickHandler={this.menuClickHandler}/>
          <MenuItem page="settings" menuClickHandler={this.menuClickHandler}/>
        </aside>
        <Main currentPage={this.state.currentPage}/>
        <Modal/>
      </div>
    );
  }
}

export default App;
