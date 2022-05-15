/**
 * @file BeastRow.js
 * @author Lillian McBride
 * @description Renders the row of Horned Beasts
 */
 import React from "react";
 import "../App.css";
 import HornedBeast from "./HornedBeast";
 import {Row, Col} from "react-bootstrap"

 class BeastRow extends React.Component {

   render() {
     return( <Row>
        {(this.props.beasts).map( (beast) => {
          // for (let i = 0; i < BeastRow.length; i++) 
          return (
         <Col key={beast._id}>
         <HornedBeast key={beast._id} title={beast.title} alt={beast.title} description={beast.description}
         imageUrl= {beast.image_url}/>
         </Col>
         );
        }
   )}
            </Row>
     );
   }
 }
 
 export default BeastRow;