/**
 * @file Main.js
 * @author Lillian McBride
 * @description Renders the main section of Horned Beasts
 */
 import React from "react";
 import HornedBeast from "./HornedBeast";
 import {Col, Container, Row} from "react-bootstrap";

 class Main extends React.Component {

   render() {
     
     const beast = this.props.beasts[0];
     return (
       <main>
         <HornedBeast title={beast.title} alt={beast.title} description={beast.description}
        imageUrl= {beast.image_url}/>
       </main>
     );
   }
 }
 
 export default Main;