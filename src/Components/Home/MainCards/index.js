import React, {useEffect, useState} from "react";

import {Card, Col, Container, Row, Spinner} from "react-bootstrap";

import axios from "axios";

const MainCards = () =>
{
    const [Element , addElement] =  useState({coins : [{}]});
    const [show, setShow] = useState(false);
    useEffect(()=>{
        axios({
            url: "https://api.coinlore.net/api/tickers/?start=0&limit=4",
            method: "GET",
            withCredentials: false,
            headers: {'Accept': 'application/json'},
        }).then((res) => {

            addElement({ coins : [ ...res.data.data ] } )
            setTimeout(()=>setShow(true) , 2000);

        })

            .catch((err) => { console.log(`Error : ${err}`) });
    },[])


    return(
                <Row  style={{  marginTop : "40px"}}>
                    {
                        Element.coins.map( (item , index) => (
                            <Col xs="12" md="6" lg="3" className={` mt-3 `} >
                                   <Card className={`shadow-2xl`}>

                                       <>
                                            <div
                                                className={`absolute items-center text-white shadow-inherit  flex justify-center h-8 p-4 -mt-5 ml-3.5 rounded-lg`}>
                                                {item.symbol && (<img className={`spin`} src={require(`./icons/${item.symbol}.png`)}  height={50} width={50}/>) }
                                            </div>
                                            <Card.Header className={`text-right`} >
                                                {item.symbol}
                                            </Card.Header>
                                            <Card.Body >
                                                {
                                                    !show ?
                                                        <div className={`flex justify-center`}>
                                                            <Spinner
                                                                as="span"
                                                                animation="border"
                                                                size="lg"
                                                                role="status"
                                                                aria-hidden="true"
                                                                variant="primary"
                                                            />
                                                            <span>Loading...</span>

                                                        </div> :
                                                        <>
                                                            <Card.Text class={`p-3 justify-between flex`}><span>Price</span> <b>{item.price_usd}</b> </Card.Text>
                                                            <hr/>
                                                            <Card.Text  class={`p-3 justify-between flex`}>Last 24h ago  <b className={`${item.percent_change_24 >0 ? 'text-green-600' : 'text-red-600'}`}>{item.percent_change_24h}</b> {' '} {item.during}</Card.Text>

                                                        </>

                                                }
                                            </Card.Body>
                                      </>
                                   </Card>
                            </Col>
                        ))
                    }
                </Row>
    )
}
export default MainCards;