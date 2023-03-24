//------------------------------
import React from "react";
//------------------------------
import {Card, Col, Container, Row} from "react-bootstrap";
import { BrowserRouter as Router } from 'react-router-dom';
//------------------------------
import SearchBar from "./SearchBar";
import LeftSide from "../LeftSide";
import MainCards from "./MainCards";
import PlotCards from "./PlotCards";
import ProjectProgress from "./ProjectProgress";
import QuickSetting from "./QuickSetting";
import Footer from "./Footer";
import Routes from "../MyRoutes/MyRoutes";
//-----------------------------
import "../../assets/App.css";
import MyRoutes from "../MyRoutes/MyRoutes";
const Home = () => {
    return (
        <>
             {/*<Container fluid>*/}
             {/*  <Row>*/}
            {/*<Col md={2}>*/}

            {/*    <LeftSide />*/}
            {/*</Col>*/}
            {/*<Col md={10} >*/}
                <SearchBar />
                <MainCards />
                <PlotCards />
                <ProjectProgress />
                <Footer />
            {/*</Col>*/}
            {/* </Row>*/}
            <QuickSetting placement="end" name="end" />
            {/*</Container>*/}

        </>


    )
}
export default Home;