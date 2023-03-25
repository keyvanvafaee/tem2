import React from "react";
//----------------------
import {Card, Col, Dropdown, ListGroup, NavDropdown, ProgressBar, Row, Table} from "react-bootstrap";
import {Android, ArrowUp, BellFill, Cart, Ticket} from "react-bootstrap-icons";
//----------------------
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <span
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}>
            {children}
        <Android />
        </span>
));
//style={{ borderRadius : "30px" , overflowX : "auto" , maxWidth: '45rem' , height : "35rem", margin : "auto" }}
const ProjectProgress = () =>
{
    return (
        <>
            <Row className={`mt-1`} >
                <Col md={8} sm={12}  className={`mt-5 justify-center`} >
                    <Card  className={`rounded-3xl border-0 overflow-x-auto max-w-3xl h-full m-auto`}>
                        <Card.Body>
                           <Card.Text> <b> Project  </b> </Card.Text>
                            <br/>
                            {/*<Card.Text style={{display : "flex" , flexDirection : "row" , justifyContent: "space-between"}}>*/}
                            <Card.Text className={`flex flex-row justify-between`} >
                                <div className={`flex items-center`}>
                                    <Ticket/>  <span> 30 Done this Month </span>
                                </div>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">

                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" active>
                                                Orange
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Text>
                            <Table  hover variant="light"  >
                                <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>MEMBERS</th>
                                    <th>BUDGET</th>
                                    <th>COMPLETION</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Material UI XD Version</td>
                                    <td></td>
                                    <td>$14,000</td>
                                    <td >
                                        <div className={`pt-1.5`}>
                                            <ProgressBar  className={`h-1.5`} animated  variant="success" now={80} />
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td>Add Progress Track</td>
                                    <td></td>
                                    <td>$14,000</td>
                                    <td>
                                        <div className={`pt-1.5`}>
                                            <ProgressBar  className={`h-1.5`} animated variant="primary" now={40} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fix Platform Errors</td>
                                    <td></td>
                                    <td>$14,000</td>
                                    <td>
                                        <div className={`pt-1.5`}>
                                            <ProgressBar  className={`h-1.5`} animated variant="primary" now={40} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fix Platform Errors</td>
                                    <td></td>
                                    <td>$14,000</td>
                                    <td>
                                        <div className={`pt-1.5`}>
                                            <ProgressBar  className={`h-1.5`} animated variant="primary" now={40} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fix Platform Errors</td>
                                    <td></td>
                                    <td>$14,000</td>
                                    <td>
                                        <div className={`pt-1.5`}>
                                            <ProgressBar  className={`h-1.5`} animated variant="primary" now={40} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fix Platform Errors</td>
                                    <td></td>
                                    <td>$14,000</td>
                                    <td>
                                        <div className={`pt-1.5`}>
                                            <ProgressBar  className={`h-1.5`} animated variant="danger" now={10} />
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={12} className={`mt-5 flex justify-center`}>
                    <Card

                        text='black'
                        // style={{ width: '20rem'  , height : "35rem" , borderRadius : "30px"}}
                        className = {`w-80 h-fill rounded-3xl mb-2`}

                    >
                        <Card.Body>
                            <Card.Title> Orders overview</Card.Title>

                            <Card.Text className={`flex mt-4`}><ArrowUp /> 24% this month</Card.Text>
                            <br/>
                            <Card.Text>
                                <span
                                    // style={{display : "inline-flex", backgroundColor : "#eccc68" , padding : "10px" , borderRadius : "30px"}}> <BellFill/>
                                    className={`inline-flex bg-custom4 p-2.5  rounded-3xl mt-2 `}>
                                        <BellFill/>
                                </span>  <b>$2400, Design changes </b>
                            </Card.Text>

                            <Card.Text><span className={`inline-flex bg-custom0 p-2.5  rounded-3xl mt-2.5 `}> <BellFill/>  </span> <b>$2400, Design changes </b></Card.Text>
                            <Card.Text><span className={`inline-flex bg-custom1 p-2.5  rounded-3xl mt-2.5`}> <BellFill/> </span><b>$2400, Design changes </b></Card.Text>
                            <Card.Text><span className={`inline-flex bg-custom2 p-2.5  rounded-3xl mt-2.5`}> <BellFill/> </span> <b>$2400, Design changes </b></Card.Text>
                            <Card.Text><span className={`inline-flex bg-custom3 p-2.5  rounded-3xl mt-2.5`}> <BellFill/> </span> <b>$2400, Design changes </b></Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}
export default ProjectProgress;