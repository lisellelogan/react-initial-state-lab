// your Bomb code here!
import React, {Component} from 'react';

export default class Bomb extends Component {
   // The initial state of Bomb should have a property called secondsLeft.
   constructor(props){
       super()

       this.state = {
           secondsLeft: props.initialCount
       }
   }
   //The initial value of secondsLeft should be equal to the initialCount prop of our Bomb component.
    render(){
        //if this.state.secondsLeft equals 0 then display 'Boom!'
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

        return(
            <h1>{message}</h1>
        )
    }
}