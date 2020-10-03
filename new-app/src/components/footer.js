import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';


export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div class = 'container'>
                    <div class="row">
                        <div class = "col-lg-6">
                            <FormControl
                                id = "subscribeForm"
                                type="text"
                                placeholder="Подпишитесь на нашу рассылку"
                                className="mr-sm-2"
                            />
                        </div>
                        <div class="col-lg-3 ml-auto" >
                        <Button variant = "light">
                            Зарегистрироваться<br/>
                            как звезда
                        </Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
