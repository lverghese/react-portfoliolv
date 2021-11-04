import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Nav from './components/Nav';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Logan Verghese",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Projects', path: '/projects'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: "My React Portfolio",
        subTitle: "Let's See How I Did",
        text: "Check out my past projects!"
      },
      about: {
        title: "My React Portfolio",
        subTitle: "Let's See How I Did",
        text: "Check out my past projects!"
      },
      projects: {
        title: "My Project Portfolio"
       
      },
      contact: {
        title: "Hit Me Up"
        
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
        {/*navbar goes here */}
        <Nav />
        </Container>
      </Router>
    );
  }
 
}

export default App;
