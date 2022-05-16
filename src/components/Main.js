/**
 * @file Main.js
 * @author Lillian McBride
 * @description Renders the main section of Horned Beasts
 */
 import React from "react";
 import BeastRow from "./BeastRow";

 class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {chosenBeasts: this.arrayOfRows(this.props.beasts)}

  }

  arrayOfRows(arr) {
    let current = [];
    let arrayRows = [];
    for (let i = 0; i < arr.length; i++) {
      if (i !== 0 && i % 3 === 0) {
        arrayRows.push(current)
        current = [];
      }
      current.push(arr[i]);
    }
    console.log(arrayRows);
    return arrayRows;
  }

   render() {
    let keyValue = 1;
    let chosenBeasts = this.arrayOfRows(this.props.beasts);
     return (
       <main>
         {chosenBeasts.map((three) => {
           keyValue++;
          return <BeastRow key={keyValue} beasts = {three} handleChange={this.props.handleChange}/>
         }
         )}
       </main>
     );
   }
 }
 
 export default Main;