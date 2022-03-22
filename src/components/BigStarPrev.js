import React, { Component } from 'react'
import image from "../images/bigImage.jpg"
import emoji from "../images/emojiCategorie.png"
import { updateCanvas } from "../helpers/updateCanvas.js"

export default class StarPrev extends Component {
    componentDidMount(){
        var canvas = this.refs.canvas;
        updateCanvas(canvas, image, emoji);
    }
   
    render() {
        return (
            <div className="col-xl-8">
                <div className="starCard">
                    <canvas className="starCard__canvasContainer" ref="canvas" width='790' height="400px">
                    </canvas>
                    <span className="starCard__starName">
                        Александр Васильев
                    </span>
                    <span className="starCard__starDescription">
                        Музыкант, лидер рок-группы “Сплин”
                    </span>
                </div>
            </div>
        )
    }
}
