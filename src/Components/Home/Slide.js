import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';

const Slide = () => {
  return (
    <div> <div className='d-flex justify-content-between' style={{ color: "white",background:"Black" }}>
    <div>  <Button className="btn  mt-1" style={{background:"#CCFF33" }}>
                        <a class="navbar-brand text-white" href="#" >
                            As Seller
                        </a>
                    </Button></div>
    <div>
        <img src="/img/logo.jpeg" style={{ height:"64px"}}/>
    </div>
    <div><Button className="btn mt-1" style={{background:"#CCFF33" }}>
                        <a class="navbar-brand text-white" href="#" >
                            As User
                        </a>
                    </Button></div>
    </div> </div>
  )
}

export default Slide