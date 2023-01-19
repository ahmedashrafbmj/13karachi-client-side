import React, {useState, useEffect} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {useHistory} from "react-router-dom";
import cartpic from '../images/shopping-cart.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, Card, Container, Row, Col } from 'react-bootstrap';



const UserNavbar=(props)=>{


    const items = useSelector((state) => state.cart);

    const [products, setProducts] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);


    const history = useHistory()
    
const logout=()=>{

    
        
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('role')
        // localStorage.removeItem('hotel')

        localStorage.removeItem('price')
        localStorage.removeItem('userhotel')
        localStorage.removeItem('imageURL')
        localStorage.removeItem('hotelemail')
        localStorage.removeItem('accountstatus')

        localStorage.removeItem('contact')
        localStorage.removeItem('market')
        localStorage.removeItem('address')
        localStorage.removeItem('area')
        if('caches' in window){
            caches.keys().then((names) => {
                    // Delete all the cache files
                    names.forEach(name => {
                        caches.delete(name);
                    })
                });
        
                // Makes sure the page reloads. Changes are only visible after you refresh.
                window.location.reload(true);
            }

        history.push('/login');
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

{/* <div className='MainDiv'> */}

<nav class="navbar navbar-light fixed-top bg-light">
<Navbar  bg="light" variant={"light"} expand="lg">
                        <Navbar.Brand href="#"><img src="/img/13karachi.png" style={{height:"60px"}}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
    
  {/* <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search Products" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> */}

      
                                {/* <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}

<div className='btn'>
<a class="btn btn-primary" href="/" role="button">Home</a>
<a class="btn btn-primary" href="/userProfile" role="button">Profile</a>
<a class="btn btn-primary" href="/userbooking" role="button">My Orders</a>

<a class="btn btn-outline-primary" onClick={logout} role="button">Logout</a>

<span className="cartCount"><Link to="/cart"><img src={cartpic}></img> {items.cartItems.length} </Link></span>

</div>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
  
                    </nav>
        
{/* </div> */}

<br />
<br />
<br />
    
    <div className='container'>

    <div class="row">

 
   

    </div>

</div>


</>


)

}

export default UserNavbar;
