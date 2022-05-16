/**
 * @file HornedBeast.js
 * @author Lillian McBride
 * @description Renders Horned Beasts
 */
 import React from "react";
 import { Card } from "react-bootstrap";
 import heart from "../imgs/heart.jpg";

 class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      votes: 0,
    };
  }

  clickHandler = () => {
    let vote = this.state.votes + 1;
    this.setState({votes : vote});

/**
 * There's a problem here
 */

    this.props.handleChange(this);
  }

   render() {
     return(
         <Card className="card" style={{ width: '18rem' }}>
            <Card.Title className="title">{this.props.title}</Card.Title>
            <Card.Img  
              onClick={this.clickHandler}
              className="beast" style={{ width: '18rem' }}
              src = {this.props.imageUrl} 
              alt = {this.props.alt}
            />
            <Card.Text className="hearts">{this.state.votes}</Card.Text>
            <Card.Img className="heart" src = {heart} />
            <Card.Text className="text">{this.props.description}</Card.Text>
          </Card>
     );
   }
 }
 
 export default HornedBeast;