import React, {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Grid, Ubuntu} from "react-bootstrap-icons";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import axios from "axios";

const Index = () =>
{
    const [Element , addElement] =  useState( ["BTC" , "ETC" , "BNB"]);
    const [graphData , setGraphData] = useState([{}]);

    const GenerateGraph = (info, coin) =>
    {
        let Xdatas = [] ;
        console.log(info)
        info.coins.map(item=>
        {
            Xdatas.push(item.time_open);
        });

        let Ydatas = [];
        info.coins.map(item=>
        {
            Ydatas.push(item.price_open);
        });

        //console.log(Xdatas , Ydatas);
        // const merged = Xdatas.reduce((obj, key, index) => ({`${...obj}, name : ${[key]} : uv : ${Ydatas[index]} `}), {});
        //
        const merged = [];

        Xdatas.map( (item , index)=>
        {
            merged.push({name : `day ${index+1}` , uv : Ydatas[index]})
        })

        console.log(merged);
        setGraphData([
            {
                "ETC" : merged,
                [coin] : merged,
                "BNB" : merged
            }
        ]);



    }

    useEffect(()=>{
        axios({
            method: "GET",
            url: "https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1YRS&limit=7",
            headers: {'X-CoinAPI-Key': 'F5637781-622E-4372-BA01-04CED34026D3'}
        })

            // Handle the response from backend here
            .then((res) => {console.log(res.data)

                {
                    //addElement({coins : res.data});
                    const info = {coins : res.data};
                    GenerateGraph(info , "BTC");

                }

            })

            // Catch errors if any
            .catch((err) => { console.log(`Error : ${err}`) });


    },[])


    return(

        <>

            <Row className={`mt-5`}  >
                {
                    // console.log(graphData.map(item=> console.log(item)))

                    Element.map( (item , index) => (
                        <Col className={`xs=12 md=3 mt-4 flex justify-center `}>
                            <Card
                                className={`mt-20 flex flex-col w-80 h-72 shadow-2xl`}>
                                <div
                                    className={`opacity-80 absolute items-center text-white shadow-2xl w-80 flex justify-center h-60 bg-custom${index} -mt-16 ml-3 rounded-lg`}>
                                    {

                                        graphData.map(coin=> (
                                            <LineChart width={400} height={250} data={coin[item]} margin={{ top: 3, right: 10, bottom: 3, left: 0 }}>
                                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                                {/*<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />*/}
                                                <XAxis dataKey="name" />
                                                <YAxis  />
                                                <Tooltip />
                                            </LineChart>

                                    ) )}

                                </div>
                                <Card.Body className={`flex flex-col`} >
                                    <Card.Text className={`flex-grow`}></Card.Text>
                                    <Card.Title >BTC PRICE CHART</Card.Title>
                                    <hr/>
                                    <Card.Text >
                                        <b className={`text-gray-400 `}> LAST 1 Years ago</b> {' '} {item.during}
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