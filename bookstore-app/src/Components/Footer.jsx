import React from 'react';
import {default as ArrowUp} from "../Assets/Arrow-Up.svg";
import {Container,Row,Col} from "react-bootstrap";

function Footer() {
    return (
            <Container className="footer">
                <Row>
                  <Col xs={10} className="text-center my-5">
                    <p>Copyright &copy; XTBookStore 2021</p>
                  </Col>
                  <Col >
                     <a href="#Img">
                         <img src={ArrowUp} alt="UpArrow" />
                    </a>
                  </Col>
                </Row>
            </Container>
    )
}

export default Footer;