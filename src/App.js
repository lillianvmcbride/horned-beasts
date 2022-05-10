/**
 * @file App.js
 * @author Lillian McBride
 * @description Horned Beasts
 */

import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

/**
 * The definition of the App class. It does not have a constructor, but
 * because it extends React.Component, it must have a render() function.
 */
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;