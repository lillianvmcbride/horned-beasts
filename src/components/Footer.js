/**
 * @file Footer.js
 * @author Lillian McBride
 * @description Renders the footer for Horned Beasts
 */
 import React from "react";

 class Footer extends React.Component {

   render() {
     return <footer className="footer">{this.props.author}</footer>;
   }
 }
 
 export default Footer;