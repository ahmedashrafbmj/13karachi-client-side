import React, {useState, useEffect} from 'react'
import HomeNavbar from './HomeNavbar';
import { Link, useHistory } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import { useDispatch } from 'react-redux';
import {add} from '../../store/orderslice';
// import { add } from '../../store/cartSlice';
import { addToCart } from "../../store/cartSlice";
// import Slider from '../slider';
import Carousel from 'react-img-carousel';
import Slide from './Slide';
import loadingimg from '../images/loading.gif'
import Products from '../Products'
import ImageSlider from './ImageSlider';
import Product from './Product';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';



const Home=(props)=>{
 


    const history = useHistory()



const [loading, setLoading] = useState(false);
const [roleau, setroleau] = useState ('');

const [areaData, setAreaData] = useState (['']);

const [SliderData, setSliderData] = useState([0])

useEffect(() => {
  fetchCarousel()
  
}, []);

    document.title = "Home -  13Karachi";
  
      const [hotel, setHotel] = useState([]);

      const [category, setCategory] = useState([]);
      const [subcategory, setsubCategory] = useState([]);
      const [categoryCount, setCategoryCount] = useState([]);
      const [subcategoryCount, setsubCategoryCount] = useState([]);
      const [accountStatus, setAccountStatus] = useState([]);

      const dispatch = useDispatch();

      const [products, setProducts] = useState([]);
      const [orders, setOrders] = useState([]);

      const getdata = async () => {

        const findEmail2 = localStorage.getItem('user'); 
    
        const res = await fetch(`https://web-production-6504.up.railway.app/api/allbookbyemail/${findEmail2}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        });
    
        const data = await res.json();
        console.log(data[4].cartItems[0].hotelname, 'obj');
        setOrders(data); 
        
       
     
    }
    

    //   useEffect(() => {
    
    //     const fetchHotels = async () => {
    //         setLoading(true)
    //         const res = await fetch('https://web-production-6504.up.railway.app/api/allpostdata');

    //         const data = await res.json();
    //         console.log(data);
        
    //         setHotel(data);

          
    //         setLoading(false)
    //     };
        
    //     fetchHotels()

    // }, []);

    const getroleauth = async () => {
    
        let femail = localStorage.getItem('user');
    
        const res3 = await fetch(`https://web-production-6504.up.railway.app/api/postbyemailsignup/${femail}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            
        });
    
    
       
        const role = await res3.json();
    
        setAccountStatus(role[0]?.accountsstatus)
    
        console.log(role[0]?.accountsstatus, 'status')

        localStorage.setItem('accountstatus', [accountStatus]);
    
    
    }
    


    useEffect(() => {
        // getroleauth()
        getdata()

        

        const fetchProducts = async () => {
            const res = await fetch('https://web-production-6504.up.railway.app/api/allpostdata');
            const data = await res.json();
            console.log(data, "data");
            setProducts(data);
        };
        fetchProducts();
      
    }, [accountStatus]);





    const handleAdd = (product) => {
        dispatch(addToCart(product));
        // history.push("/cart");
    };  

    useEffect(() => {

        const fetcharea = async () => {
            const res = await fetch(`https://web-production-6504.up.railway.app/api/allgetarea`);
    
            const dataarea = await res.json();
            console.log(dataarea);
        
            setAreaData(dataarea);
         
        };
        
        fetcharea()
    
    }, []);

    useEffect(() => {

       
        const fetchCategory = async () => {
            const res = await fetch(`https://web-production-6504.up.railway.app/api/allgetcategory`);

            const datacategory = await res.json();
            console.log(datacategory);

            const countCategory =   datacategory.length;
        
            setCategory(datacategory);

            setCategoryCount(countCategory)
            
            console.log(countCategory, 'category count')
         
        };
        
        fetchCategory()

    }, [accountStatus]);


    useEffect(() => {

        const fetchsubCategory = async () => {
            const res = await fetch('https://web-production-6504.up.railway.app/api/allgetsubcategory');

            const datasubcategory = await res.json();
            console.log(datasubcategory);
            const countsubCategory =   datasubcategory.length;
        
            setsubCategory(datasubcategory);   
            setsubCategoryCount(countsubCategory)

            console.log(countsubCategory, 'subcategory count')
         
        };
        
        fetchsubCategory()
        // fetchCarousel()

    }, []);


    const fetchCarousel = async () => {
        const res = await fetch('https://web-production-6504.up.railway.app/api/allgetcarousel');

        const datacarousel = await res.json();
        
        console.log(datacarousel, 'carousel');
    
        setSliderData(datacarousel);  
     
    };
    



    console.log(products, "products")
const getrole=()=>{

    let roleuser = localStorage.getItem('role');

    setroleau(roleuser);
    console.log(roleau, 'roleg')


}


useEffect(() => {
takeorder()
getrole()
fetchCarousel()
// console.log(roleau, 'getroleuseeffect')

}, [accountStatus]);


const routeto=()=>{
    
    

    let roleuseradmin = localStorage.getItem('role');
    console.log(roleuseradmin, 'roleuseradmin')

    const roleua3 = localStorage.getItem('accountstatus'); 
    
    if (roleuseradmin === 'User'){
        history.push('/')
    }
    
    else if (roleuseradmin === 'Admin'){
        history.push('/welcome')
    }

    

    else if (roleuseradmin === 'Super'){
        history.push('/welcome2')
    }
    
    
    else{
        history.push('/')
    }
 
}

useEffect(() => {

    routeto()
    
    
    }, [accountStatus]);
    

    const takeorder = (orders) => {
        dispatch(add(orders));
      };
      console.log(SliderData,"SliderData")
      const [current, setCurrent] = useState(0);


    return (

      
        <>
        
        {/* <marquee  behavior="" direction="left">Ab kisi bhi market ki koi bhi ghomain  ghar baythay 13 karachi par</marquee> */}

        {
           
               (roleau === 'User' ?<>
               <Slide/>
               {/* <UserNavbar />   */}
               </> 
               :
               <>
                         <Slide/>

               {/* <HomeNavbar /> */}
               
               </>
               )

        }
        {
           
               (roleau === 'User' ?<>
               {/* <Slide/> */}
               <UserNavbar />  
               </> 
               :
               <>
                         {/* <Slide/> */}

               <HomeNavbar />
               
               </>
               )

        }

        

{/* <div className='d-flex justify-content-between' style={{ color: "white",background:"Black" }}>
<div>  <Button className="btn text-white" style={{color:"#058b80"}}>
                    <a class="navbar-brand text-white" href="#" >
                        As Seller
                    </a>
                </Button></div>
<div>
    <img src="/img/logo.jpeg" style={{ height:"64px"}}/>
</div>
<div><Button className="btn text-white">
                    <a class="navbar-brand text-white" href="#" >
                        As User
                    </a>
                </Button></div>
</div> */}
{/* <ImageSlider slides = {SliderData} /> */}
{/* <Carousel
                style={{zIndex: 1}}
                className="banner"
                autoplaySpeed={2000}
                lazyLoad={true}
                height={"200px"}
                // viewportHeight={500}
                slideWidth={"100%"}
                slideHeight={"200"}
                autoplay={true}
                cellPadding={5}>
                {
                    SliderData.map((slide, index) => {
                        return (
<>

<img key={index} className='bannerImg' src={slide?.imageURL[current] } />
</>

                        
                            )

                    })
                }
                <img className='bannerImg' src='https://th.bing.com/th/id/OIP.xEbcztsACaZL-Aw5DeLuZwHaDZ?w=338&h=160&c=7&r=0&o=5&pid=1.7' />
                
            </Carousel> */}



{/* {SliderData.map((slide) => ( */}

{/* <Slider /> */}


{/* ))} */}

    <br />
    <br />
    <h1>All Area:</h1>
    <br />
    <br />
    <section  style={{display:"flex",justifyContent:"space-between",textAlign:"center",flexWrap:"wrap",alignItems:"center"}}>


          
            {areaData.map((category) => (
             

                    <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6" style={{background:"white", color:"black",marginTop:"10px",display:"flex",justifyContent:"center" }}>
                    <Card   style={{ width: '10rem'}}>
                          <Card.Img style={{height:"120px"}} variant="top"  src={category.imageURL} />
                          <Card.Body>
                            <Card.Title>{category.categoryName}</Card.Title>
                           
                            <Button class="m-auto" style={{backgroundColor:"#058b80",marginLeft:"4px"}} onClick={()=> alert("go to app")}>Show Markets</Button>
                          </Card.Body>
                        </Card>
                        </div>
         
                        
            ))}
      
           </section>

  
        
        {/* <br />
        <br />
        <br /> */}




        {/* <br />
    <br />
    <h1>All Category Total: ({categoryCount})</h1>
    <br />
    <br /> */}
    {/* <Container>
      <Row>

          
            {category.map((category) => (
             

            
                    <Col>                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={category.imageURL}/>
                        <Card.Body>
                            <Card.Title>{category.categoryName} </Card.Title>
                          

                            <Button  variant="primary" href={`ShowGallery/${category.categoryName}`}> Show Products By Category</Button>
                        
                        </Card.Body>
                        </Card>
                        <br />
                        </Col>
         
                        
            ))}
      
            </Row>
      </Container>

   */}
        
        <br />
        <br />
        <br />












        {/* <h1>All Sub Category Total: ({subcategoryCount})</h1>
    <br />
    <br />
    <Container>
      <Row>

          
            {subcategory.map((subcategory) => (
             

            
                    <Col>                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'}/>
                        <Card.Body>
                            <Card.Title>{subcategory.subcategoryName} </Card.Title>
                          

                            <Button  variant="primary" href={`ShowSub/${subcategory.subcategoryName}`}> Show Products</Button> 
                        </Card.Body>
                        </Card>
                        <br />
                        </Col>
         
                        
            ))}
      
            </Row>
      </Container>

  
        
        <br />
        <br />
        <br /> */}



        <h1>All Products</h1>
        
        <br />
        <br />
{/* <Product data={products}/> */}

        {/* {
      loading?( //if
        // <h3>Loading ... </h3>
        <img src={loadingimg} />
      ): ( //else */}


     

          
            {products.map((product) => (
             

              <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6" style={{background:"white", color:"black",marginTop:"10px",display:"flex",justifyContent:"center" }}>
                    <Card   onClick={()=> alert("go to app")} style={{ width: '16rem'}}>
                          <Card.Img style={{height:"220px"}} variant="top"  src={product.imageURL} />
                          <Card.Body>
                            <Card.Title>{product.productTitle}</Card.Title>
                            <Card.Title>Rs-/{product.productPrice}</Card.Title>
                           
                          </Card.Body>
                        </Card>
                        </div>
                        
                        
                        ))}
                        

                        {/* footer  */}
                        <div class="row" style={{background:"#CCFF33", color:"black",fontWeight:"bold",textAlign:"center"}}>
    <br/>
    <div class="col-lg-4 col-md-6">
      <img src="/img/logo.jpeg" style={{ height:"64px"}}/>
    <h6>you can visit the any shop of any market at 13karachi you can visit the any <br/>
    you can visit the any shop of any market at 13karachi
    you can <br/>
    you can visit the any shop of any market at 13karachi you can visit the any <br/>  you can visit the any shop of any market at 13karachi    you can visit the any </h6>   
    </div>
    <div class="col-lg-4 col-md-6">
     <h1>UseFul Links</h1>
     <p>Home</p>
     <p>sign up</p>
     <p>Login</p>
     {/* <p>About us</p> */}
    </div>
    <div class="col-lg-4 col-md-6">
<h1>Contact Us</h1>
<p><FacebookIcon/></p>
<p><InstagramIcon/></p>
<p><AppBlockingIcon/></p>
    </div>
  
    {/* <Layout>
      
    <Footer style={{ textAlign: 'center' ,background:"black", color:"white" }}>  <div class="col-9" style={{ textAlign: 'left' ,background:"black", color:"white" }}> <h1>13 karachi</h1>
    <h6>you can visit the any shop of any market at 13karachi you can visit the any <br/>
    you can visit the any shop of any market at 13karachi
    you can <br/>
    you can visit the any shop of any market at 13karachi you can visit the any <br/>  you can visit the any shop of any market at 13karachi    you can visit the any </h6>   
            
            </div>
            
            www.13karachi.com ©2022 Created by Ahmed Ashraf</Footer>

    </Layout> */}
   </div>
                   
           {/* )
        }  */}


 
        </>
       
    );
};

                    // <Col>                    
                    // <Card style={{ width: '18rem' }} >

                    // <Link to={`Details/${product._id}`}> 
                
                    // <Card.Img variant="top"  src={product.imageURL} />

                    // </Link>

                    //     <Card.Body>
                    //         <Card.Title><h4>{product.productTitle}</h4></Card.Title>
                            
                    //         {
                            
                    //        (product.productwasPrice === null)

                    //         ? (product.productwasPrice === "" || `Rs.${product.productPrice}/-`) 
                           
                            
                    //         :
                            
                    //         <Card.Text>

                    //         <h4><b>Rs.{product.productPrice}/- &nbsp; <del>Rs.{product.productwasPrice}/-</del></b></h4>
                    
                 

                    //         </Card.Text>
                    //     }
                          
                    //         <br />
                           
                    //         <Button  variant="primary" onClick={() => handleAdd(product)}>Add to Cart</Button> 
                         
                    //     </Card.Body>
                    //     </Card>
                    //     <br />
                    //     </Col>

//                      
export default Home;