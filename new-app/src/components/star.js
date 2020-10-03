import React, { Component } from 'react';
import {Image,Figure} from 'react-bootstrap';
import image from "../images/1Bill_Clinton.jpg";

class Star extends Component {
    render() {
        return (
            <div className='col-lg-2' id="starPrev">
                
                    <Figure className = "scale">
                        <Figure.Image 
                        width={140}
                        src = {image}
                        rounded
                        />
                        <Figure.Caption id="starName" >
                        Билл Клинтон
                        </Figure.Caption>
                    </Figure>
            </div>
        )
    }
}
export default Star;