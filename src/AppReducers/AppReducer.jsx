import React from "react";

const AppReducer = (state = {lastRoute : "Home"} , action)=>
{
    switch (action.type)
    {
        case "changeS":
            return {lastRoute : action.payload};
        break;
    }
}

export  default  AppReducer;