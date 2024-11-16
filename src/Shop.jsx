import React from "react";

import {Container, Row, Col} from 'react-bootstrap';
import Topbar from "./TopBar";
import { useState } from "react";
export default function Shop()
{

    let[cat, setcat] = useState(
       [ {
            id:"1",
            Cat:"Pepsi",
            img: "./images/pepsi.png"
        },

        {
            id:"2",
            Cat:"Soap",
            img: "./images/soap.png"
        },
        {
          id:"3",
          Cat:"Medicine",
          img: "./images/medicine.png"
      },
      {
        id:"4",
        Cat:"Drinks",
        img: "./images/drinks.png"
    },
    {
      id:"5",
      Cat:"Biscuts",
      img: "./images/biscuts.png"
      },{
        id:"6",
        Cat:"Chocolates",
        img: "./images/chocolates.png"
    },
]
    )

    let[products, setproducts] = useState([
      {
        id:"1",
      product:"Dairy Milk",
      img: "./images/dairy.png",
      price:"100"
      },

      {
        id:"2",
      product:"Marie Gold",
      img: "./images/marie.png",
      price:"50"
      },

      {
        id:"3",
      product:"Hamam",
      img: "./images/hamam.png",
      price:"30"
      },

      {
        id:"4",
      product:"Pepsi",
      img: "./images/pepsi.png",
      price:"70"
      },
      {
        id:"5",
      product:"Cola",
      img: "./images/cola.png",
      price:"40"
      },
      {
      product:"Dolo",
      img: "./images/dolo.png",
      price:"100"
      },

      {
        id:"7",
      product:"5 Star",
      img: "./images/star.png",
      price:"80"
      },
      {
        id:"8",
      product:"Kit Kat",
      img: "./images/kitkat.png",
      price:"60"
      },
    ])

   let[cart, setcart]= useState([])
    const addproduct = (i) =>
    {
       
       setcart((olddata)=> [
        ...olddata,
        {
          id:products[i].id,
          product:products[i].product,
          img: products[i].img,
          price:products[i].price,

        }
       ])
    }
    return(
     <div>

    <Container fluid>
         <Topbar data={cart.length} />
       </Container>

       <Container fluid className="m-2">

        <img src={'./images/banner.png'} height="220px"/>

       </Container> 
        

       <Container fluid className="text-center p-2">
        <h1 className="bg-primary p-3 text-white text-start"> List of Category</h1>
           <Row>

          
              {cat.map( (Categorys , index) =>

        <Col sm={4}>
            <div>
                   <img src={Categorys.img} height="220px"/>

                   <h2 className="bg-primary text-white p-2"> {Categorys.Cat}</h2>
            </div>
         </Col>
             )}
         
      </Row>
       </Container>

       


       <Container fluid>
       <h1 className="bg-danger p-2 text-white"> List of Products</h1>
       <Row>
              {products.map((p , i) =>
              <Col sm={4}>
              <div className="text-center p-4">
                      <h2> {p.product}</h2>
                      <img src={p.img} width={90}/>
                      <h2> Rs. {p.price}</h2>

                      <button className="btn btn-primary" onClick={() => addproduct(i)}> Add To Cart</button>
                    
              </div>
              </Col>
              )}
        
                <h1 className="bg-success p-2 text-white m-2"> My Cart</h1>
                {cart.map((p , i) =>
              <Col sm={4}>
                <div className="text-center p-4">
                    <h2> {p.product}</h2>
                    <img src={p.img} width={90}/>
                    <h2> Rs. {p.price}</h2>

                    <button className="btn btn-primary" onClick={() => addproduct(i)}> Add To Cart</button>
                  
                  </div>
            </Col>
            )}
        </Row>
         
       </Container>

       <Container fluid>
        <Row>
          <Col>
          <div className="bg-primary p-2 text-white text-center"> Shopping Webiste Copyright 20204</div>
          </Col>
        </Row>
       </Container>
     </div> 

    )
}