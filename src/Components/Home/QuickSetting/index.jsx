import React, {useState} from "react";
//----------------
import {Offcanvas} from "react-bootstrap";
import {Send} from "react-bootstrap-icons";
//----------------
const QuickSetting = ({...props}) =>
{
    const [show, setShow] = useState(false);
    ///------------------
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    ///------------------
    return(
        <>
            <div onClick={handleShow} style={{boxShadow : "0rem 0.25rem 1.25rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.4375rem 0.625rem -0.3125rem rgba(64, 64, 64, 0.4)" , borderRadius : "40px" ,position : "fixed" , bottom : 20 , right : 20 , cursor:"pointer" , padding : "15px" , backgroundColor :"#f1f2f6"}}>
                <Send />
            </div>

            <Offcanvas show={show} onHide={handleClose} {...props} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>


        </>
    )
}

export default QuickSetting;