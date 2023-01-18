import React, {useState, useEffect} from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {useHistory} from "react-router-dom";
import cartpic from '../images/shopping-cart.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';



const HomeNavbar=()=>{

    const [products, setProducts] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);




const items = useSelector((state) => state.cart);

console.log(items, 'items')

const history = useHistory()
    
const logout=()=>{
    
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('role')
        localStorage.removeItem('hotel')
        localStorage.removeItem('accountstatus')
        localStorage.removeItem('contact')
        localStorage.removeItem('market')
        localStorage.removeItem('address')
        localStorage.removeItem('area')

        history.push('/')
    }



    useEffect(() => {

        const fetchProducts = async () => {
            const res = await fetch('https://ahmed8364.herokuapp.com/api/allpostdata');
            const data = await res.json();
            console.log(data, "data");
            setProducts(data);
        };
        fetchProducts();
      
    }, []);

    console.log(products, "products nav")


    const onSuggestHandler =(text)=>{
        setText(text);
        setSuggestions([]);
    }

    const onChangeHandler = (text)=>{
    let matches = [];

    if(text.length > 0){
        matches = products.filter(user => {
        const regex = new RegExp(`${text}`, "gi");
        return user.productTitle.match(regex)
   
        })
     
    }
        console.log(matches, "matches")
        setSuggestions(matches)
        setText(text)
    }


return(

<>
<Navbar style={{background:"#CCFF33",fontWeight:"bold"}} expand="lg">
      {/* <Navbar style={{background:"#CCFF33",fontWeight:"bold"}} expand="lg"> */}
      <Container fluid>
        <Navbar.Brand href="#"><img src="/img/13karachi.png" style={{height:"60px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/userregister">Signup As User</Nav.Link>
            <Nav.Link href="/register">Signup As Seller</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
          <Nav>
 
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


<br />
<br />
<br />

    
    <div className='container'>

    <div class="row">

 
        <div class="col-xs-4">

    </div>

    </div>

</div>
     
</>


)

}

export default HomeNavbar;
