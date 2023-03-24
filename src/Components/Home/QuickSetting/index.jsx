import React, {useState} from "react";
//----------------
import {Alert, Button, CloseButton, Offcanvas} from "react-bootstrap";
import {Send, TicketDetailed} from "react-bootstrap-icons";
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
            <div onClick={handleShow}


                className={`d-none d-md-block  shadow-2xl border-2 rounded-3xl fixed bottom-10 right-10 cursor-pointer p-3 bg-amber-50 `}


            >

                <Send />
            </div>


            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                    <Alert className={`cursor-pointer`} onClick={handleClose} variant="danger"> <TicketDetailed/> </Alert>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>
                        This is content within an <code>.offcanvas-lg</code>.
                    </p>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default QuickSetting;