/**
 * @file HornedBeast.js
 * @author Lillian McBride
 * @description Renders Horned Beasts
 */
 import React from "react";
 import { Card } from "react-bootstrap";

 class HornedBeast extends React.Component {

   render() {
     return(
         <Card style={{ width: '18rem' }}>
            <Card.Title className="title">{this.props.title}</Card.Title>
            <Card.Img style={{ width: '18rem' }}
              src = {this.props.imageUrl} 
              alt = {this.props.alt}
            />
            <Card.Text className="text">{this.props.description}</Card.Text>
          </Card>
     );
   }
 }
 
 export default HornedBeast;