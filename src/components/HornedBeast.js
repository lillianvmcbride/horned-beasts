/**
 * @file HornedBeast.js
 * @author Lillian McBride
 * @description Renders Horned Beasts
 */
 import React from "react";
 import { Image } from "react-bootstrap";

 class HornedBeast extends React.Component {

   render() {
     return(
         <div className="HornedBeast">
            <h2>{this.props.title}</h2>
            <Image
              src = {this.props.imageUrl} 
              alt = {this.props.alt}
            />
            <p>{this.props.description}</p>
        </div>
     );
   }
 }
 
 export default HornedBeast;