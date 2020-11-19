import React, { Component } from 'react';
import emoji from "../images/emojiHearts.png"
import BigStarPrev from "./BigStarPrev"
import StarPrev from "./StarPrev"

export default class StarsPreview extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <h2 className="starsPreviewTitle">
                                <span className="starsPreviewTitle__highlight">
                                популярные 
                                </span>
                                знаменитости
                            </h2>
                        </div>
                        <div className="col-xl-1">
                            <img className="starsPreviewImage" src={emoji} alt=""/>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <BigStarPrev/>
                        <StarPrev/>
                        <StarPrev/>
                        <StarPrev/>
                        <StarPrev/>
                        <StarPrev/>
                        <StarPrev/>
                        <StarPrev/>
                    </div>
                </div>
            </div>
        )
    }
}
