import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Container, NavbarBrand, Navbar, Nav } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Logan Verghese",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Projects', path: '/project'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: "My React Portfolio",
        subTitle: "Let's See How I Did!",
        text: "Check out my past projects!"
      },
      about: {
        title: "Learn Something About Me",
        subTitle: "Who Am I?",
        text: "Just a fellow bootcamp student trying to learn as much as he can, as efficiently as he can."
      },
      project: {
        title: "My Project Portfolio"
       
      },
      contact: {
        title: "Hit Me Up"
        
      },
      resume: {
        title: "Professional Resume"
        
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
        <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand='lg'>
                <NavbarBrand>Logan Verghese</NavbarBrand>

                <NavbarToggle className="border-0" aria-controls='navbar-toggle' />
                <NavbarCollapse id='navbar-toggle'>
                    <Nav className="ms-auto">
                      <Link className="nav-link" to='/'>Home</Link>
                      <Link className="nav-link" to='/about'>About</Link>
                      <Link className="nav-link" to='/project'>Projects</Link>
                      <Link className="nav-link" to='/contact'>Contact</Link>
                      <Link className="nav-link" to='/resume'>Resume</Link>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
            <Switch>
            <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}  />
            <Route path="/about" exact render={() => <About title={this.state.about.title}  />}  />
            <Route path="/contact" exact render={() => <Contact title={this.state.contact.title}  />}  />
            <Route path="/project" exact render={() => <Project title={this.state.project.title} />}  />
            <Route path="/resume" exact render={() => <Resume title={this.state.resume.title} />}  />
            </Switch>
        </Container>
          <Footer />

        </Container>
        
      </Router>
    );
  }
 
}

export default App;
