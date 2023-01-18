import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';

const Slide = () => {
  return (
    <div className='d-flex justify-content-between' style={{ color: "white",background:"Black",width:"100%" }}>
    <div>  <Button className="btn  mt-1" style={{background:"#CCFF33" }}>
                        <a class="navbar-brand text-white" href="/register" >
                            As Seller
                        </a>
                    </Button></div>
    <div>
        <img src="/img/logo.jpeg" className='img-fluid' style={{ height:"64px"}}/>
    </div>
    <div><Button className="btn  mt-1"  style={{background:"#CCFF33",  }}>
                        <a class="navbar-brand text-white" href="/userregister" >
                            As User
                        </a>
                    </Button></div>
    </div>
  )
}

export default Slide