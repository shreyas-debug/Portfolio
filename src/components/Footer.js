import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaDev } from "react-icons/fa";

function Footer() {
    return (
        <Container fluid className="footer-new">
            <Row>
                <Col md="12" className="footer-body-new">
                    <p style={{ fontSize: "1.2em", marginBottom: "20px" }}>Get in Touch</p>
                    <a href="mailto:satputeshreyas07@gmail.com" className="footer-email">satputeshreyas07@gmail.com</a>
                    <ul className="footer-icons-new">
                        <li className="social-icons-new">
                            <a href="https://github.com/shreyas-debug" style={{ color: "white" }} target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                        </li>
                        <li className="social-icons-new">
                            <a href="https://www.linkedin.com/in/shreyas-satpute/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        </li>
                        <li className="social-icons-new">
                            <a href="https://devpost.com/shreyas-satpute" style={{ color: "white" }} target="_blank" rel="noopener noreferrer"><FaDev /></a>
                        </li>
                    </ul>
                    <p style={{ fontSize: "0.8em", marginTop: "50px" }}>© {new Date().getFullYear()} Shreyas Satpute</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;