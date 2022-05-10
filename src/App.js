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

/**
 * The definition of the App class. It does not have a constructor, but
 * because it extends React.Component, it must have a render() function.
 */
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header header="Horned Beasts"/>
        <Main />
        <Footer author="Lillian McBride" />
      </div>
    );
  }
}

export default App;