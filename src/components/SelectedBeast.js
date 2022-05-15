/**
 * @file SelecteBEast.js
 * @author Lillian McBride
 */
 import React from 'react';
 import {Modal, Button, Image} from 'react-bootstrap'
 
 class SelectedBeast extends React.Component{
 

   render(){
 
     return(
        <Modal show={this.props.show} onHide={this.props.onClose}>
            <Modal.Header closeButton>
           <Modal.Title>{this.props.beast.title}</Modal.Title>
           </Modal.Header>
         <Modal.Body>
           <Image className= "biggerImage" src= {this.props.beast.image_url} />
           <br />
           {this.props.beast.description}
         </Modal.Body>
         <Modal.Footer>
         <Button variant="secondary" onClick={this.props.onClose}>
            Close
          </Button>
         </Modal.Footer>
       </Modal>
     );
   }
 }
 
 
 
 export default SelectedBeast;