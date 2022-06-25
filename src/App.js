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
        show: false, beast: data[0],
        beastList: data
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


  handleFormSubmitted = (evt) => {
    evt.preventDefault();
  };


  hornlist = (evt) => {
    let numHorns = evt.target.value;
    console.log(numHorns);
    if ('all' === numHorns) {
      this.setState({
        beastList: data
      })
    }
      else {
      let keepArray = data.filter(ele => {
        return (ele.horns.toString() === numHorns);
      })
      this.setState({
        beastList : keepArray
      })
      return keepArray
      }
  };





  render() {
    return (
      <div className="App">
        <Header header="HORNED BEASTS"/>
        <div>
          <select className = "select" defaultValue={'all'} 
          onChange={this.hornlist} 
          >
            <option value= 'all'>All Horned Beasts</option>
            <option value= '1'>One Horned Beasts</option>
            <option value= "2">Two Horned Beasts</option>
            <option value= "3">Three Horned Beasts</option>
          </select>
          </div>    
        <Main beasts={this.state.beastList} handleChange={this.handleChange}/>
        <Footer author="Lillian McBride 2022" />
        <SelectedBeast show={this.state.show} beast={this.state.beast} onClose={this.closeHandler}/>
      </div>
    );
  }
}

export default App;