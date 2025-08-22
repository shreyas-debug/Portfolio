import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import studysync from "../assets/projects/studysync.png";
import cyberattack from "../assets/projects/cyberattack.png";

// --- Reusable Project Card Component ---
function ProjectCard({ imgPath, title, description, ghLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Button variant="primary" href={ghLink} target="_blank">
          <AiFillGithub /> &nbsp; GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}

function Projects() {
    return (
        <Container fluid className="project-section-new" id="projects">
            <Container>
                <h1 className="project-heading-new">
                    Selected <strong className="purple">Work</strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={6} className="project-card-new">
                        <ProjectCard
                            imgPath={studysync}
                            title="StudySync"
                            description="A full-stack platform to connect students with compatible study partners, using a Flask backend and React.js frontend. Won the Public Choice Award at Birminghack 1.0."
                            ghLink="https://github.com/shreyas-debug/StudySync"
                        />
                    </Col>
                    <Col md={6} className="project-card-new">
                        <ProjectCard
                            imgPath={cyberattack}
                            title="Cyberattack Detector"
                            description="An advanced cyberattack detection system using a machine learning algorithm in Python. Integrated with Arduino and C++ for real-time SMS alert notifications."
                            ghLink="https://github.com/shreyas-debug/Cyberattack-Detector"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;