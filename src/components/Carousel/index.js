import runBuddy from '../../assets/images/run-buddy.png'
import fitnessBuddy from '../../assets/images/fitnessBuddy.png'
import frontEnd from '../../assets/images/frontEnd.png'
import weatherDash from '../../assets/images/weatherdashboard.png'
import budgetTracker from '../../assets/images/budgettracker.png'
import techBlog from '../../assets/images/techblog.png'
import React from "react";
import Card from "../Card";
import { Container, Row } from "react-bootstrap";

class Carousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Movie/Book Search',
                    subTitle: 'Get info about your favorite book or movie fast!',
                    imgSrc: frontEnd,
                    link: 'https://lverghese.github.io/run-buddy/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Run Buddy',
                    subTitle: 'Workout with a Friend',
                    imgSrc: runBuddy,
                    link: 'https://lverghese.github.io/run-buddy/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Fitness Buddy',
                    subTitle: 'The whole plan is laid out for you!',
                    imgSrc: fitnessBuddy,
                    link: 'https://lverghese.github.io/run-buddy/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Tech Blog',
                    subTitle: 'Post what you know and comment on others!',
                    imgSrc: techBlog,
                    link: 'https://techblog-lv.herokuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Weather Dashboard',
                    subTitle: 'Find out the weather in your favorite city!',
                    imgSrc: weatherDash,
                    link: 'https://lverghese.github.io/weather-dashboard/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Budget Tracker',
                    subTitle: 'Track your budget even without internet!',
                    imgSrc: budgetTracker,
                    link: 'https://lvbudget-tracker.herokuapp.com/',
                    selected: false
                }
                
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        })
    }
   
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around mx-auto mt-4" sm={3}>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
    
}

export default Carousel;