import React, {useEffect, useState} from "react";

import {Card, Col, Container, Row} from "react-bootstrap";

import axios from "axios";

const MainCards = () =>
{
    const [Element , addElement] =  useState({coins : [{}]});

    useEffect(()=>{
        axios({

            // Endpoint to send files
            url: "https://api.coinlore.net/api/tickers/?start=0&limit=4",
            method: "GET",
            withCredentials: false,
            headers: {

                // Add any auth token here
                'Accept': 'application/json',
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'Access-Control-Allow-Origin': '*',
//                 'Access-Control-Allow-Credentials': 'true',
//                 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
//                 'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',*/
//                 'X-CoinAPI-Key': "1DA4CD34-23BA-4303-99D4-B317E095B2C8",
            },
        })

            // Handle the response from backend here
            .then((res) => {addElement({ coins : [ ...res.data.data ] } ) })

            // Catch errors if any
            .catch((err) => { console.log(`Error : ${err}`) });


    },[])

    return(
                <Row  style={{  marginTop : "40px"}}>

                    {
                        Element.coins.map( (item , index) => (

                            <Col xs="12" md="6" lg="3" className={` mt-3 `} >


                                   <Card

                                       className={`shadow-2xl`}>

                                       <div
                                           className={`absolute items-center text-white shadow-inherit  flex justify-center h-8 p-4 -mt-5 ml-3.5 rounded-lg`}>
                                           {item.symbol && (<img className={`spin`} src={require(`./icons/${item.symbol}.png`)}  height={50} width={50}/>) }
                                       </div>
                                       <Card.Header className={`text-right`} >
                                           {item.symbol}
                                       </Card.Header>
                                       <Card.Body >
                                           <Card.Text class={`p-3 justify-between flex`}><span>Price</span> <b>{item.price_usd}</b> </Card.Text>
                                           <hr/>
                                           <Card.Text  class={`p-3 justify-between flex`}>
                                             Last 24h ago  <b className={`${item.percent_change_24 >0 ? 'text-green-600' : 'text-red-600'}`}>{item.percent_change_24h}</b> {' '} {item.during}
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