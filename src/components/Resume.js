import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <Container fluid className="resume-section" id="resume">
            <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: "250px" }}
                >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                </Button>
            </Row>
            <Row className="resume">
                <Document file={pdf} className="d-flex justify-content-center">
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
            </Row>
        </Container>
    );
}

export default Resume;