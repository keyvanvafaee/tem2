//-------------
import React, {useEffect, useState} from "react";
//-------------
import {Breadcrumb, Button, Col, Container, FloatingLabel, Form, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {Bell, Hammer, House, MenuAppFill, People, Ubuntu} from "react-bootstrap-icons";
import {Link} from "react-router-dom";
//-------------
const SearchBar = () =>
{
    let listener = null;
    ///----------------
    const [scrollState, setScrollState] = useState("top");
    const [navStyle , setNavStyle] = useState({backgroundColor : "#ffffff" , position : "static" });
    ///----------------
    useEffect(() => (
        listener = document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            let display = "block";
            window.innerWidth <= 760 ? display = "none" : display = "block";
            if (scrolled >= 60) {
                 setNavStyle( {display : display ,   position : 'fixed' , width : '81%' , backgroundColor : '#dfe4ea' })
            } else {
                if (scrolled ==0) display = "block";
                  setNavStyle({display : display, position : "static", width : "100%" ,backgroundColor: "#ffffff" })
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
                                        <Breadcrumb.Item ><House/></Breadcrumb.Item>
                                        <Breadcrumb.Item >Library</Breadcrumb.Item>
                                        <Breadcrumb.Item active><b> Data </b></Breadcrumb.Item>
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
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"

                                        />
                                    </FloatingLabel>

                                    <Nav.Link className="p-2"  href="#home"><House /> </Nav.Link>
                                    <Nav.Link  className="p-2"  href="#cdfd"><People /> </Nav.Link>
                                    <Nav.Link  className="p-2"  href="#cdfd"><Bell /> </Nav.Link>



                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    )
}

export default  SearchBar;