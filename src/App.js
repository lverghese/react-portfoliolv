import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container} from 'react-bootstrap';
import Navigation from './components/Navigation'
import Home from './components/Home';
import Footer from './components/Footer';
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
          <Navigation />
          <Home />
          <Footer />

        </Container>
        
      </Router>
    );
  }
 
}

export default App;
