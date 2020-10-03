import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Categories extends Component {
    render() {
        return (
            <div class = "container" id="categories">
                <div class ="row">
                  
                        <div id="categoryButtons" class = "col-lg-12">
                            <Button className = "categoryButton" variant = "secondary">Все категории</Button>
                            <span className = "separator"></span>
                            <Button className = "categoryButton" variant = "secondary">Актеры</Button>
                            <Button className = "categoryButton" variant = "secondary">Ведущие</Button>
                            <Button className = "categoryButton" variant = "secondary">Блогеры</Button>
                            <Button className = "categoryButton" variant = "secondary">Музыканты</Button>
                            <Button className = "categoryButton" variant = "secondary">Спортсмены</Button>
                        </div>
                   
                </div>
            </div>
        )
    }
}
export default Categories;