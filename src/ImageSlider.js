// your ImageSlider code here!
import React, {Component} from 'react';

export default class ImageSlider extends Component {

    state = ({
        currentSlideIndex: 0
    })

    render(){
        // It should only render out the text 'I am on slide &lt;CURRENT_SLIDE&gt;', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.
        return (
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }
}