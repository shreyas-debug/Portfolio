import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

// --- Fractal Tree Animation Component ---
function FractalTree() {
    const canvasRef = useRef(null);

    useEffect(() => {
        // ... (animation code remains the same)
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let frameId;
        let angle = 0;

        const size = 350;
        canvas.width = size * 2;
        canvas.height = size * 2;
        canvas.style.width = `${size}px`;
        canvas.style.height = `${size}px`;
        ctx.scale(2, 2);

        function drawBranch(x, y, len, angle, branchWidth, color1, color2) {
            ctx.beginPath();
            ctx.save();
            ctx.strokeStyle = `hsl(${color1}, 100%, 50%)`;
            ctx.fillStyle = `hsl(${color2}, 100%, 50%)`;
            ctx.lineWidth = branchWidth;
            ctx.translate(x, y);
            ctx.rotate(angle * Math.PI / 180);
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -len);
            ctx.stroke();

            if (len < 10) {
                ctx.beginPath();
                ctx.arc(0, -len, 5, 0, Math.PI / 2);
                ctx.fill();
                ctx.restore();
                return;
            }
            drawBranch(0, -len, len * 0.8, angle + 15, branchWidth * 0.8, color1 + 10, color2 + 5);
            drawBranch(0, -len, len * 0.8, angle - 15, branchWidth * 0.8, color1 + 10, color2 + 5);
            ctx.restore();
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            angle += 0.2;
            const len = 60;
            const startX = size / 2;
            const startY = size;
            const initialAngle = Math.sin(angle * Math.PI / 180) * 2;
            drawBranch(startX, startY, len, initialAngle, 10, 200, 290);
            frameId = requestAnimationFrame(animate);
        }
        animate();

        return () => cancelAnimationFrame(frameId);
    }, []);

    return <canvas ref={canvasRef} className="fractal-canvas" />;
}

function Home() {
    return (
        <section>
            <Container fluid className="home-section-new" id="home">
                <Container className="home-content-new">
                    <Row>
                        <Col md={5} className="home-image-col">
                            <div className="fractal-canvas-container">
                                <FractalTree />
                            </div>
                        </Col>
                        <Col md={7} className="home-header-new">
                            <h1 style={{ paddingBottom: 15, fontSize: "2.5em" }} className="heading">
                                Shreyas Satpute
                            </h1>
                            <h2 className="heading-sub">
                                Software Engineer <span className="purple">|</span> Birmingham, UK
                            </h2>
                            <p className="home-about-body-brief">
                                MSc Computer Science graduate with experience in full-stack development, specializing in .NET and React. Passionate about creating efficient, scalable web applications and solving complex problems.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;