import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiPython, DiGit, DiDotnet, DiDatabase, DiGoogleCloudPlatform } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import laptopImg from "../assets/about.png";

function About() {
    return (
        <Container fluid className="about-section-new" id="about">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            About <strong className="purple">Me</strong>
                        </h1>
                        <Card className="quote-card-view-new">
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p style={{ textAlign: "justify" }}>
                                        I am <span className="purple">Shreyas Satpute, </span>
                                        a Software Engineer based in <span className="purple"> Birmingham, UK.</span>
                                        <br /><br />
                                        I hold an MSc in Computer Science from the University of Birmingham and a Bachelor of Engineering. My professional experience at LTIMindtree involved developing solutions for major clients like Microsoft and Kellogg's, focusing on .NET development, legacy system migration, and improving testing efficiency.
                                        <br /><br />
                                        I am passionate about building robust applications and thrive in collaborative, agile environments.
                                    </p>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
                        <img src={laptopImg} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col xs={4} md={2} className="tech-icons"><DiDotnet /></Col>
                    <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
                    <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
                    <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
                    <Col xs={4} md={2} className="tech-icons"><SiFlask /></Col>
                    <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
                    <Col xs={4} md={2} className="tech-icons"><DiDatabase /></Col>
                    <Col xs={4} md={2} className="tech-icons"><DiGoogleCloudPlatform /></Col>
                    <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
                </Row>
            </Container>
        </Container>
    );
}

export default About;