//------------------------------
import React, {useReducer} from "react";
//------------------------------
import {Card, Col, Container, Row} from "react-bootstrap";
import { BrowserRouter as Router } from 'react-router-dom';
//------------------------------
import LeftSide from "./Components/LeftSide/index";
//-----------------------------
import "./assets/App.css";
import MyRoutes from "./Components/MyRoutes/MyRoutes";
import Home from "./Components/Home/Home";

import AppReducer from "./AppReducers/AppReducer";
import AppContext from "./AppContext/AppContext";
const App = () =>
{
    const [state , dispatch] = useReducer(AppReducer, {});

    return (
        <Router>
            <AppContext.Provider value={{state , dispatch}}>
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
            </AppContext.Provider>
        </Router>

    )
}
export default App;