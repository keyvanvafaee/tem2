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


                <SearchBar />
                <MainCards />
                <PlotCards/>
                <ProjectProgress />
                <Footer />

            <QuickSetting placement="end" name="end" />


        </>


    )
}
export default Home;