/**
 * @file HornedBeast.js
 * @author Lillian McBride
 * @description Renders Horned Beasts
 */
 import React from "react";

 class HornedBeast extends React.Component {

   render() {
     return(
         <div className="HornedBeast">
            <h2>{this.props.title}</h2>
            <img 
              src = {this.props.imageUrl} 
              alt = "Some Horned Beast"
            />
            <p>{this.props.description}</p>
        </div>
     );
   }
 }
 
 export default HornedBeast;