import React from "react";
import SearchBar from "../Home/SearchBar";
import {Spinner} from "react-bootstrap";

const Trade = () =>
{

    return(
        <>

            <SearchBar/>
            <div className={`mt-5 flex justify-center w-1/2 m-auto `}>
                <Spinner
                    as="span"
                    animation="border"
                    size="lg"
                    role="status"
                    aria-hidden="true"
                    variant="primary"
                    className={`mr-5`}
                />
                <b> Under Develop </b>

            </div>
        </>
    )
}

export default Trade;