import runBuddy from '../../assets/images/run-buddy.png'
import fitnessBuddy from '../../assets/images/fitnessBuddy.png'
import frontEnd from '../../assets/images/frontEnd.png'
import surf from '../../assets/images/surf-report.png'
import calculator from '../../assets/images/calculator.png'
import ledWall from '../../assets/images/led-wall.png'
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
                    title: 'Run Buddy',
                    subTitle: 'Workout with a Friend',
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
                    title: 'Run Buddy',
                    subTitle: 'Workout with a Friend',
                    imgSrc: fitnessBuddy,
                    link: 'https://lverghese.github.io/run-buddy/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Run Buddy',
                    subTitle: 'Workout with a Friend',
                    imgSrc: surf,
                    link: 'https://lverghese.github.io/run-buddy/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Run Buddy',
                    subTitle: 'Workout with a Friend',
                    imgSrc: calculator,
                    link: 'https://lverghese.github.io/run-buddy/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Run Buddy',
                    subTitle: 'Workout with a Friend',
                    imgSrc: ledWall,
                    link: 'https://lverghese.github.io/run-buddy/',
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