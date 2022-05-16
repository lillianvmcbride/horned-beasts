/**
 * @file App.js
 * @author Lillian McBride
 * @description Horned Beasts
 */

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from "./components/data.json";
import SelectedBeast from './components/SelectedBeast';

/**
 * The definition of the App class. It does not have a constructor, but
 * because it extends React.Component, it must have a render() function.
 */
class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        show: false, beast: data[0]
      }
    }

  handleChange = (beast) => {
    this.setState({
      show: true, beast: beast
    })
  }

  closeHandler = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="App">
        <Header header="HORNED BEASTS"/>
        <Main beasts={data} handleChange={this.handleChange}/>
        <Footer author="Lillian McBride 2022" />
        <SelectedBeast show={this.state.show} beast={this.state.beast} onClose={this.closeHandler}/>
      </div>
    );
  }
}

export default App;