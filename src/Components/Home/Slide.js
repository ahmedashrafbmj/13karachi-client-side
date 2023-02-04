import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import {useHistory} from "react-router-dom"

const Slide = () => {
  const func  = () => {
    alert("you are loging as user and you enjoy more on our app Note: Web is available onlly for sellers ")
    window.location.href='https://play.google.com/store/apps?hl=en&gl=US';
  }
  const history  = useHistory()
  return (
    <div className='d-flex justify-content-between' style={{ color: "white",background:"Black",width:"100%" }}>
    <div><Button className="btn  mt-2"  style={{background:"#CCFF33",color:"#fff"  }}  onClick={()=> func()}>
                            As User
                    </Button></div>
    <div>
        <img src="/img/logo.jpeg" className='img-fluid' style={{ height:"64px"}}/>
    </div>
    <div><Button className="btn  mt-2"  style={{background:"#CCFF33", color:"#fff" }}   onClick={()=> history.push('/register')}>
                            As seller
                    </Button></div>
    </div>
  )
}

export default Slide