import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";


function Footer() {



    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Logan Verghese
                    </Col>
                    <Col className="social-container">
                        
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