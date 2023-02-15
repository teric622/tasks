import React from "react";
import "./App.css";
import image1 from "./assets/marek-piwnicki-s_fgw1df-_I-unsplash.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <div className="2layout">
                <Container>
                    <Row>
                        <Col>
                            <div className="leftColumn">
                                <h1> THIS IS A HEADER</h1>
                                <p>First column</p>
                                <header
                                    className="App-header"
                                    style={{ color: "red" }}
                                >
                                    UD CISC275 with React Hooks and TypeScript
                                </header>
                                <p className="name">Eric Tlaseca</p>
                                <p className="hello">My Hello World</p>
                                <img
                                    src={image1}
                                    alt="image not available"
                                    className="image1"
                                />
                                <div
                                    className="leftRectangle"
                                    style={{
                                        border: "2px pink",
                                        padding: "4px",
                                        width: "20vw",
                                        height: "10vh",
                                        backgroundColor: "red",
                                        boxShadow: "5px 10px #888888"
                                    }}
                                ></div>
                            </div>
                        </Col>
                        <Col>
                            <div className="rightColumn">
                                <p>Second column.</p>
                                <Button
                                    onClick={() => console.log("Hello World!")}
                                >
                                    Log Hello World
                                </Button>
                                <p>TODO LIST</p>
                                <ul className="list">
                                    <li>Math Homework</li>
                                    <li>Cisc Homework</li>
                                    <li>Excercise</li>
                                </ul>
                                <div
                                    className="rightRectangle"
                                    style={{
                                        border: "2px pink",
                                        padding: "4px",
                                        width: "20vw",
                                        height: "10vh",
                                        backgroundColor: "red",
                                        boxShadow: "5px 10px #888888"
                                    }}
                                ></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <img src={image1} alt="image not available" className="image1" /> */}
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
