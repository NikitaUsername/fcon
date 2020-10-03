import React from "react"
import {Button, Container, Form, Navbar, FormControl} from 'react-bootstrap'

class Header extends React.Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="md" fixed="top" bg="dark" variant="light">
                <Container>
                    <Navbar.Brand href="/" >
                    <h2 >
                     FCON - Famous Connection
                    </h2>
                    </Navbar.Brand>  
                    <Navbar.Toggle aria-controls="responisive-navbar-nav"/>
                    <Navbar.Collapse>
                        <Form inline>
                            <FormControl
                            type="text"
                            placeholder="Имя..."
                            className="mr-sm-2"
                            />
                        </Form>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        );
    }
};
export default Header;