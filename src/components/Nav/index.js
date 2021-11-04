import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, NavbarBrand, Navbar } from 'react-bootstrap';

class Nav extends React.Component {



  render() {
    return (
        <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom">
                <NavbarBrand>
                    Logan Verghese
                </NavbarBrand>
            </Navbar>
        </Container>
      
    );
  }
 
}

export default Nav;
