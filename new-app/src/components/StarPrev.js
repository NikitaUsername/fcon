import React, { Component } from 'react'
import image from "../images/smallImage.jpg"
import emoji from "../images/emojiCamera.png"
import { updateCanvas } from "../helpers/updateCanvas.js"

export default class StarPrev extends Component {
    componentDidMount(){
        var canvas = this.refs.canvas;
        updateCanvas(canvas, image, emoji);
    }

    render() {
        return (
            <div className="col-xl-auto">
                <div className="starCard">
                    <canvas className="starCard__canvasContainer" ref="canvas" width='380' height="400px">
                    </canvas>
                    <span className="starCard__starName">
                        Саша Бортич
                    </span>
                    <span className="starCard__starDescription">
                        Актриса театра и кино
                    </span>
                </div>
            </div>
        )
    }
}
