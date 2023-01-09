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
            const res = await fetch('https://web-production-6504.up.railway.app/api/allpostdata');
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
        <Navbar.Brand href="#">Logo</Navbar.Brand>
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
            <Nav.Link href="/adminOrders">Login</Nav.Link>
          </Nav>
          <Nav>
        {/* <Nav.Link onClick={logout}>Logout</Nav.Link> */}
 
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

{/* <nav class="navbar navbar-light fixed-top bg-light">
<Navbar bg="light" variant={"light"} expand="lg">
                        <Navbar.Brand href="#">13Karachi</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
   
      

                               

<div className='btn'>
<a class="btn btn-primary" href="/" role="button">Home</a>

<a class="btn btn-primary" href="/userregister" role="button">Signup User</a>

<a class="btn btn-primary" href="/register" role="button">Signup As a Seller</a>

<a class="btn btn-outline-primary" href="/Login" role="button">Login</a>


                    
               

<span className="cartCount"><Link to="/cart"><img src={cartpic}></img> {items.cartItems.length} </Link></span>

</div>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                    
                    </nav> */}
<br />
<br />
<br />

    
    <div className='container'>

    <div class="row">

 
        <div class="col-xs-4">

    <input type="text" class="form-control"  style={{width: 1100}} placeholder="Search Products"  
    onChange={e=> onChangeHandler(e.target.value)} value={text}/>


    {suggestions && suggestions.map((suggestion, i)=>


            <div key={i} className=" suggestion col-mid-12 justify-content-md-center" onClick={()=> onSuggestHandler(suggestion.productTitle)}>
  
            {suggestion.productTitle}   
            <Link to={`Details/${suggestion._id}`}> 
            <img src= {suggestion.imageURL} ></img> 
            </Link>
        <br />

      
        {suggestion.productPrice}
    
        </div>

        
    ) }
<br />
{/* 
<a class="btn btn-outline-primary" href="#" role="button">Search</a> */}
    </div>

    </div>

</div>
     
</>


)

}

export default HomeNavbar;
