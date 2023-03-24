//---------------------
import React from "react";
//---------------------
import { Nav, NavLink} from "react-bootstrap";

const Footer = () =>
{
    return(
        <div className={`mt-3 flex justify-between bg-blend-lighten`}>
            <div> © 2023, made with by KeiOneVafaee for a better web.</div>
            <div>
                <Nav className={`flex`}>
                    <NavLink> one   </NavLink>
                    <NavLink> two   </NavLink>
                    <NavLink> three </NavLink>
                </Nav>
            </div>
        </div>
    )
}

export default  Footer;