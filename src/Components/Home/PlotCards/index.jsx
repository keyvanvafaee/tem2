import React, {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Grid, Ubuntu} from "react-bootstrap-icons";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import axios from "axios";

const Index = () =>
{
    const [Element , addElement] =  useState( ["BTC" , "ETH" , "BNB"]);
    const [graphData , setGraphData] = useState([{"BTC" : [] , "ETH" : [] , "BNB" : []}]);

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

        graphData.map(item=> {
            if (item[coin] === "BTC")
            {
                setGraphData([
                    {
                        "ETH" : item.ETC,
                        "BNB" : item.BNB,
                        "BTC" : merged,

                    }
                ]);

            }
            if (item[coin] === "ETH")
            {
                setGraphData([
                    {
                        "ETH" : merged,
                        "BNB" : item.BNB,
                        "BTC" : item.BTC,

                    }
                ]);

            }
            if (item[coin] === "BNB")
            {
                setGraphData([
                    {
                        "ETH" : item.ETC,
                        "BNB" : merged,
                        "BTC" : item.BNB,

                    }
                ]);

            }

        })




    }

    Element.map( ele =>
        axios({
            method : "GET",
            url    : `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${ele}_USD/latest?period_id=1YRS&limit=7`,
            headers: {'X-CoinAPI-Key': '1DA4CD34-23BA-4303-99D4-B317E095B2C8'}
        }).then((res) => GenerateGraph({coins : res.data} , ele)).catch((err) => { console.log(`Error : ${err}`) }),[])


    return(

        <>

            <Row className={`mt-5`}  >
                {
                    Element.map( (item , index) => (
                        <Col className={`xs=12 md=3 mt-4 flex justify-center `}>
                            <Card
                                className={`mt-20 flex flex-col w-80 h-72 shadow-2xl`}>
                                <div
                                    className={`opacity-80 absolute items-center text-white shadow-2xl w-80 flex justify-center h-60 bg-custom${index} -mt-16 ml-3 rounded-lg`}>
                                    {

                                        graphData.map(coin=> (

                                            console.log("COIN : ",  coin , "ITEM " , item)
                                            // <LineChart width={400} height={250} data={coin[item]} margin={{ top: 3, right: 10, bottom: 3, left: 0 }}>
                                            //     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                            //     {/*<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />*/}
                                            //     <XAxis dataKey="name" />
                                            //     <YAxis  />
                                            //     <Tooltip />
                                            // </LineChart>

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