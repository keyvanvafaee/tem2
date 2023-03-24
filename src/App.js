//------------------------------
import React from "react";
//------------------------------
import {Card, Col, Container, Row} from "react-bootstrap";
import { BrowserRouter as Router } from 'react-router-dom';
//------------------------------
import LeftSide from "./Components/LeftSide/index";
//-----------------------------
import "./assets/App.css";
import MyRoutes from "./Components/MyRoutes/MyRoutes";
import Home from "./Components/Home/Home";
const App = () =>
{
    return (
        <Router>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <LeftSide />
                    </Col>
                    <Col md={10} >
                        <MyRoutes/>
                    </Col>
                </Row>
            </Container>
        </Router>
    )
}
export default App;