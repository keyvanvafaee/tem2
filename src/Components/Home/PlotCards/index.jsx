import React, {useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Ubuntu} from "react-bootstrap-icons";

const Index = () =>
{
    const [Element , addElement] = useState({

        items : [
            {
                name  : "Booking",
                value : "281",
                change: "+55%",
                during: "than last week",
                bgColor : "mred"
            },
            {
                name  : "Today's Users",
                value : "2,300",
                change: "+3%",
                during: "than last month",
                bgColor : "morange"
            },
            {
                name  : "Revenue",
                value : "34k",
                change: "+1%",
                during: "than yesterday",
                bgColor: "mblue"
            }
        ]
    })


    return(

        <>
            <Row className={`mt-5`}  >
                {
                    Element.items.map( (item , index) => (

                        <Col className={`xs=12 md=3 mt-4 flex justify-center `}

                             // className="xs=12 md=3" style={{marginTop : "20px" , display : "flex" , justifyContent : "center"}}
                             //
                        >
                            <Card

                                className={`mt-20 flex flex-col w-80 h-72 shadow-2xl`}
                                // style={{ marginTop : "40px" ,display : "flex" , flexDirection : "column" ,width : "20rem" , height : "18rem" ,boxShadow : "0rem 0.25rem 1.25rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.4375rem 0.625rem -0.3125rem rgba(64, 64, 64, 0.4)"}}

                            >

                                <div

                                    className={`opacity-80 absolute items-center text-white shadow-2xl w-80 flex justify-center h-60 bg-${item.bgColor} -mt-16 ml-3 rounded-lg`}
                                   // style={{ position :"absolute"   , alignItems : "center" ,  color : "white",boxShadow : "inherit" ,  width : "20rem" ,  display : "flex",  justifyContent : "center" ,  height : "10rem", backgroundColor: item.bgColor , marginTop : "-20px" , marginLeft : "10px" , borderRadius: ".75rem" }}


                                >


                                    <Ubuntu/>
                                </div>

                                <Card.Body className={`flex flex-col`} >
                                    <Card.Text className={`flex-grow`}></Card.Text>
                                    <Card.Title className={`text-right`}>sjdisdosai dsajdosa iod sadjsoa</Card.Title>
                                    <hr/>
                                    <Card.Text >
                                        <b className={`text-green-600`}> djsid sdiosad jisadioas</b> {' '} {item.during}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>

                    ))
                }
            </Row>
        </>
    )
}

export default  Index;