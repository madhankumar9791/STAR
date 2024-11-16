import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";

 export default function Topbar({data})
{
    return(
        <div className="sticky"> 

     
        <Container fluid className="p-2">
            <Row>
                <Col xs={3}>
               <img src={'./images/logo.png'} />
                </Col>

                <Col xs={6}>
                <input type="text" placeholder="Search Here" />
                </Col>

                <Col xs={3}>
               
              <span className="icon"> <SlLogin /></span> 
                 
              <span className="icon1"> <FaCartArrowDown />  </span>  
              <span><sup>{data}</sup></span>
                 
                </Col>
            </Row>
        </Container>

        </div>
    )
}