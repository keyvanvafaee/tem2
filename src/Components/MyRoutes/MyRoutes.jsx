import React, {useReducer} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Link , Routes} from 'react-router-dom';
import Defi from "../Defi";
import Home from "../Home/Home";
import BlockChain from "../BlockChain";
import Nft from "../Nft"
import Aboutus from "../AboutUs";
import Trade from "../Trade";
const MyRoutes = () =>{

    return(

        <>


                    <Routes>

                        <Route  path='*' element={ <Home />}></Route>
                        <Route exact={true} path='/' element={<Home />}></Route>
                        <Route path="/Defi" element={<Defi/>}></Route>
                        <Route path="/BlockChain" element={<BlockChain/>}></Route>
                        <Route path="/Nft" element={<Nft/>}></Route>
                        <Route path="/Aboutus" element={<Aboutus/>}></Route>
                        <Route path="/Trade" element={<Trade/>}></Route>
                    </Routes>

        </>
    )


}


export default MyRoutes;