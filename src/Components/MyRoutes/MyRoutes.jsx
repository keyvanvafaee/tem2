import React from 'react';
import {Route, Link, Router , Routes} from 'react-router-dom';
import Defi from "../Defi";
import Home from "../Home/Home";

const MyRoutes = () =>(
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path="/Defi" element={<Defi/>}></Route>
            </Routes>
        </>
    )


export default MyRoutes;