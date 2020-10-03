import React from "react"
import Star from "./star"

class StarsBlock extends React.Component{
    render(){
        return(
            <div className="container" id="starsBlock">
                <div class="row">
                    <div class="col-lg-3">
                        <h2 id="categoryTitle">
                            Актеры
                        </h2>
                    </div>
                    <div class="col-lg-2 ml-auto">
                        <a id="seeAll" href="">
                            Посмотреть больше
                        </a>
                    </div>
                    

                </div>
                <div className="row">
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
            </div>
        )
    }
}
export default StarsBlock;