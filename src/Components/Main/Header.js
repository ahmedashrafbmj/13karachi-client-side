import React from 'react'
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { Navbar, Nav, Container } from 'react-bootstrap'
import {useHistory,Link} from "react-router-dom";




const Header=(props)=>{
    // console.log(props, 'headerprops')
   
    
const history = useHistory();

const logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('accountstatus')
    localStorage.removeItem('role')
    localStorage.removeItem('hotel')

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
      }
    

    history.push('/')
}
  



return(

<>








<Navbar style={{background:"#CCFF33",fontWeight:"bold"}} expand="lg">
      {/* <Navbar style={{background:"#CCFF33",fontWeight:"bold"}} expand="lg"> */}
      <Container fluid>
        <Navbar.Brand href="/welcome"><img src="/img/13karachi.png" style={{height:"60px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
<Link to={"/"}>
Home
</Link>
<Link to={"/Add"}>
Add Products
</Link>
<Link to={"/adminProfile"}>
Profile
</Link>
<Link to={"/adminOrders"}>
My Orders
</Link>
           
          </Nav>
          <Nav>
        <Nav.Link onClick={logout}>Logout</Nav.Link>
 
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>










</>


)

}

export default Header;
