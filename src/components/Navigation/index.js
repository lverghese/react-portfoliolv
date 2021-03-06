import React from 'react';
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom';
import { Container, NavbarBrand, Navbar, Nav } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Home from '../Home';

class Navigation extends React.Component {



  render() {
    return (
      <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand='lg'>
                <NavbarBrand>Logan Verghese</NavbarBrand>

                <NavbarToggle className="border-0" aria-controls='navbar-toggle' />
                <NavbarCollapse id='navbar-toggle'>
                    <Nav className="ms-auto">
                      <Link className="nav-link" to='/'>Home</Link>
                      <Link className="nav-link" to='/about'>About</Link>
                      <Link className="nav-link" to='/projects'>Projects</Link>
                      <Link className="nav-link" to='/contact'>Contact</Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
            <Switch>
            <Route exact path="/" component={Home} />
            </Switch>
        </Container>
      
    );
  }
 
}

export default Navigation;
