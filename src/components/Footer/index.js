import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

function Footer() {



    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-2">
                    <Col className="p-0" md={3} sm={12}>
                        Logan Verghese
                    </Col>
                    <Col className="social-container" lg={2}>
                    <a href="https://www.linkedin.com/in/loganverghese30/"
                        className="linkedIn">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/lverghese"
                        className="github">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/loganverghese/"
                        className="instaG">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Made by Logan Verghese
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;