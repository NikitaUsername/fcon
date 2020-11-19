import React, { Component } from 'react'
import emoji from "../images/emoji.png"
import play from "../images/play.png"
import video from "../videos/gerald.mp4"
import Marque from "./Marquee"
import StarsPreview from "./StarsPreview"


export default class Home extends Component {
    constructor(props){
        super(props);
        this.videoRef = React.createRef();
        this.background = React.createRef();
        this.playPause = React.createRef();
    }
    clicked = () =>
    {
        if(this.videoRef.current.paused) {
            this.videoRef.current.play();
            this.background.current.style.visibility = "hidden";
            this.playPause.current.style.visibility ="hidden";
        } 
        else{
            this.videoRef.current.pause();
            this.background.current.style.visibility = "visible";
            this.playPause.current.style.visibility ="visible";
        }
    }
    render() {
        return (
            <div>
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-11">
                                <p className="title">
                                    УНИКАЛЬНАЯ ПЛАТФОРМА <br/>
                                    <span className="title title__highlight">
                                        ПЕРСОНАЛЬНЫХ ВИДЕОПОЗДРАВЛЕНИЙ<br/>
                                    </span>
                                    ОТ ЗНАМЕНИТОСТЕЙ
                                </p>
                            </div>
                            <div className="col-xl-1">
                                <div className="d-flex justify-content-end">
                                    <img className="emoji"  src={emoji}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="video">
                                    <video loop="true" src={video} preload="auto" className="video__content" ref={this.videoRef} onClick={this.clicked}>
                                    </video>
                                    <div ref={this.background} className="video__background" onClick={this.clicked}>
                                    </div>
                                    <img ref={this.playPause} src={play} className="video__playpause" onClick={this.clicked}>
                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Marque/>
                <StarsPreview/>
            </div>
        )
    }
}
