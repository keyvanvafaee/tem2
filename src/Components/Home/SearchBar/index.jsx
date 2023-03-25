//-------------
import React, {useContext, useEffect, useReducer, useState} from "react";
//-------------
import {
    Badge,
    Breadcrumb,
    Button,
    Col,
    Container,
    FloatingLabel,
    Form,
    Nav,
    Navbar,
    NavDropdown,
    Row
} from "react-bootstrap";
import {Bell, Hammer, House, MenuAppFill, People, Search, Ubuntu} from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import AppContext from "../../../AppContext/AppContext";

import AppReducer from "../../../AppReducers/AppReducer";
//-------------
const SearchBar = () =>
{

    const {state , dispatch} = useContext(AppContext);
    let listener = null;
    ///----------------
    const [scrollState, setScrollState] = useState("top");
    const [navStyle , setNavStyle] = useState({backgroundColor : "#dfe4ea" , position : "static" });
    ///----------------
    useEffect(() => (
        listener = document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            let display = "block";
            window.innerWidth <= 760 ? display = "none" : display = "block";
            if (scrolled >= 60) {
                 setNavStyle( {display : display ,   position : 'fixed' , width : '81%' , backgroundColor : '#ffffff' })
            } else {
                if (scrolled ==0) display = "block";
                  setNavStyle({display : display, position : "static", width : "100%" ,backgroundColor: "#dfe4ea" })
            }

        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [navStyle])));
    ///---------------

    return (
        <>
            <Navbar expand="md"

                     style={{ right : "10px" , display :  navStyle.display   ,zIndex : "1000", marginTop: "3px", width : navStyle.width  ,position:navStyle.position , backgroundColor :  navStyle.backgroundColor ,
                         opacity : ".93" , borderRadius : "10px" }}

            >
                <Container style={{marginTop : "20px"}} fluid>
                        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                    <Breadcrumb style={{marginTop : "15px"}}>
                                        <Breadcrumb.Item >Home</Breadcrumb.Item>
                                        <Breadcrumb.Item >Library</Breadcrumb.Item>

                                        <Breadcrumb.Item active><b> {state.lastRoute} </b></Breadcrumb.Item>
                                    </Breadcrumb>


                            </Nav>
                            <Nav className={`d-sm-block d-md-none mt-3 mb-3`}>

                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/defi">DeFi</Nav.Link>
                                <Nav.Link as={Link} to="/blockchain">BlockChain</Nav.Link>

                            </Nav>
                            <Nav className="d-sm-flex flex-row ">

                                    <FloatingLabel controlId="floatingSearch" label="Search Something...">
                                        <Form.Control
                                            className={`bg-gray-300`}
                                            type="search"

                                            placeholder="Search"

                                            aria-label="Search"

                                        />
                                    </FloatingLabel>

                                    <Nav.Link className="p-2"  href="#home">
                                        <div className={`relative`}>

                                            <Badge className={`absolute -top-5`} bg="success">3</Badge>
                                            <People/>

                                        </div>
                                    </Nav.Link>

                                <Nav.Link className="p-2"  href="#home">
                                    <div className={`relative`}>

                                        <Badge className={`absolute -top-5`}  bg="primary">2</Badge>
                                        <Search/>

                                    </div>
                                </Nav.Link>
                                <Nav.Link className="p-2"  href="#home">
                                    <div className={`relative`}>

                                        <Badge className={`absolute -top-5`} bg="warning">9</Badge>
                                        <People/>

                                    </div>
                                </Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    )
}

export default  SearchBar;