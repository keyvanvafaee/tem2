import React, {useState} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {Ubuntu, Usb} from "react-bootstrap-icons";


const MainCards = () =>
{

    const [Element , addElement] = useState({

        items : [
            {
                name  : "Booking",
                value : "281",
                change: "+55%",
                during: "than last week",
                bgColor :"mred"
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
            },
            {
                name   : "Follower",
                value  : "+91",
                change : "0",
                during :  "Just updated",
                bgColor: "mpurple"
            }
        ]
    })


    return(

                <Row  style={{  marginTop : "40px"}}>
                    {
                        Element.items.map( (item , index) => (

                            <Col xs="12" md="6" lg="3" className={` mt-3 `} >
                                   <Card

                                       className={`shadow-2xl`}>
                                       <div
                                           className={`absolute items-center text-white shadow-inherit  flex justify-center h-8 bg-${item.bgColor} p-4 -mt-5 ml-3.5 rounded-lg`}>
                                           <Ubuntu/>
                                       </div>
                                       <Card.Header className={`text-right`} >
                                           {item.name}
                                       </Card.Header>
                                       <Card.Body>
                                           <Card.Title style={{textAlign : "right"}}>{item.value}</Card.Title>
                                           <hr/>
                                           <Card.Text>
                                               <b style={{color : "green"}}>{item.change}</b> {' '} {item.during}
                                           </Card.Text>

                                       </Card.Body>
                                   </Card>
                            </Col>

                        ))
                    }
                </Row>

    )
}

export default MainCards;