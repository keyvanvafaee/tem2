import React, {useState} from "react";
//---------------------
import {Nav} from "react-bootstrap";
import {MenuApp} from "react-bootstrap-icons";
import {Link} from "react-router-dom";
//---------------------

const LeftSide = () => {
    const [item , addItem] = useState({
        items : [
            {
              name : "Main Menu",
              route: "/"
            },
            {
                name : "Home",
                route: "/"
            },
            {
                name : "DeFi",
                route: "/defi"
            },
            {
                name : "BlockChain",
                route :"/blockchain"
            },
            {
                name  : "NFT",
                route : "/nft"
            },
            {
                name    : "Trade",
                route   : "/trade"
            },
            {
                name  : "About Us",
                route : "/aboutus"
            }
        ]
    })

    return(
        <>
            <Nav  className="d-none d-md-flex flex-column mt-3.5 fixed h-full  bg-custom1 w-2/12 rounded-3xl p-2 " variant="pills" defaultActiveKey="link-1" >


                {
                    item.items.map( (item, index)=> (
                        <>
                            {
                                index === 0 ? <>
                                        <Nav.Link  as={Link} to={`${item.route}`} className={`text-white mt-2  flex`} >
                                            <MenuApp/>
                                            <div className={`pl-2`}>{item.name}</div>
                                        </Nav.Link>
                                        <hr className={`text-white`}/> </>
                                :
                                index === 5 ?
                                    <>
                                        <Nav.Link  as={Link} to={`${item.route}`} className={`text-white mt-2  flex`} eventKey={`${index}`} >
                                            <MenuApp/>
                                            <div className={`pl-2`}>{item.name}</div>
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/" className={`flex-grow`}></Nav.Link>
                                    </>

                                    :
                                    <Nav.Link as={Link} to={`${item.route}`} className={`text-white mt-2  flex`} eventKey={`${index}`}>
                                        <MenuApp/>
                                        <div className={`pl-2`}>{item.name}</div>
                                    </Nav.Link>
                            }

                        </>
                    ))
                }
                {/*<Nav.Link as={Link} to="/" className={`text-white flex mt-2`} eventKey="link-1"> <MenuApp/>  Home</Nav.Link>*/}
                {/*<Nav.Link as={Link} to="/Defi" className={`text-white flex mt-2`} eventKey="link-2"> <MenuApp/>  DeFi</Nav.Link>*/}
                {/*<Nav.Link as={Link} to="/" className={"text-white flex mt-2"} eventKey="link-3"> <MenuApp/>  Link3</Nav.Link>*/}
                {/*<Nav.Link as={Link} to="/" className={`text-white flex mt-2`} eventKey="link-4"> <MenuApp/>  Link4</Nav.Link>*/}
                {/*<Nav.Link as={Link} to="/" className={`text-white flex mt-2`} eventKey="link-5"> <MenuApp/>  Link5</Nav.Link>*/}
                {/*<Nav.Link as={Link} to="/" className={`flex-grow`}></Nav.Link>*/}
                {/*<Nav.Link as={Link} to="/" className={`text-white flex mt-2`} eventKey="link-6"><MenuApp/>  Link4</Nav.Link>*/}
            </Nav>
        </>
    )
}

export default LeftSide;