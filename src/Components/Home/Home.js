import React, { useState, useEffect } from 'react'
import HomeNavbar from './HomeNavbar';
import { Link, useHistory } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import { useDispatch } from 'react-redux';
import { add } from '../../store/orderslice';
// import { add } from '../../store/cartSlice';
import { addToCart } from "../../store/cartSlice";
// import Slider from '../slider';
import Carousel from 'react-img-carousel';
import Slide from './Slide';
import loadingimg from '../images/loading.gif'
import Products from '../Products'
// import ImageSlider from './ImageSlider';
import Product from './Product';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
require('react-img-carousel/lib/carousel.css');



const Home = (props) => {



    const history = useHistory()



    const [loading, setLoading] = useState(false);
    const [roleau, setroleau] = useState('');

    const [areaData, setAreaData] = useState();

    const [SliderData, setSliderData] = useState([0])



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

        const res = await fetch(`https://ahmed8364.herokuapp.com/api/allbookbyemail/${findEmail2}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });

        const data = await res.json();
        console.log(data[4]?.cartItems[0]?.hotelname, 'obj');
        setOrders(data);



    }


    const getroleauth = async () => {

        let femail = localStorage.getItem('user');

        const res3 = await fetch(`https://ahmed8364.herokuapp.com/api/postbyemailsignup/${femail}`, {
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
            const res = await fetch('https://ahmed8364.herokuapp.com/api/allpostdata');
            const data = await res.json();
            console.log(data, "data");
            setProducts(data);
        };
        fetchProducts();

    }, [accountStatus]);





   
    useEffect(() => {

        const fetcharea = async () => {
            const res = await fetch(`https://ahmed8364.herokuapp.com/api/allgetarea`);

            const dataarea = await res.json();
            console.log(dataarea);

            setAreaData(dataarea);

        };

        fetcharea()

    }, []);

    useEffect(() => {


        const fetchCategory = async () => {
            const res = await fetch(`https://ahmed8364.herokuapp.com/api/allgetcategory`);

            const datacategory = await res.json();
            console.log(datacategory);

            const countCategory = datacategory?.length;

            setCategory(datacategory);

            setCategoryCount(countCategory)

            console.log(countCategory, 'category count')

        };

        fetchCategory()

    }, [accountStatus]);


    useEffect(() => {

        const fetchsubCategory = async () => {
            const res = await fetch('https://ahmed8364.herokuapp.com/api/allgetsubcategory');

            const datasubcategory = await res.json();
            console.log(datasubcategory);
            const countsubCategory = datasubcategory?.length;

            setsubCategory(datasubcategory);
            setsubCategoryCount(countsubCategory)

            console.log(countsubCategory, 'subcategory count')

        };

        fetchsubCategory()

    }, []);


    const fetchCarousel = async () => {
        const res = await fetch('https://ahmed8364.herokuapp.com/api/allgetcarousel');

        const datacarousel = await res.json();

        console.log(datacarousel, 'carousel');

        setSliderData(datacarousel.map((e,i)=>e?.imageURL));

    };
    
    console.log(SliderData,"SliderData")


    console.log(products, "products")
    const getrole = () => {

        let roleuser = localStorage.getItem('role');

        setroleau(roleuser);
        console.log(roleau, 'roleg')


    }


    useEffect(() => {
        takeorder()
        getrole()

    }, [accountStatus]);


    const routeto = () => {



        let roleuseradmin = localStorage.getItem('role');
        console.log(roleuseradmin, 'roleuseradmin')

        const roleua3 = localStorage.getItem('accountstatus');

        if (roleuseradmin === 'User') {
            history.push('/')
        }

        else if (roleuseradmin === 'Admin') {
            history.push('/welcome')
        }



        else if (roleuseradmin === 'Super') {
            history.push('/welcome2')
        }


        else {
            history.push('/')
        }

    }

    useEffect(() => {

        routeto()


    }, [accountStatus]);


    const takeorder = (orders) => {
        dispatch(add(orders));
    };

    useEffect(() => {
        fetchCarousel()
    }, [])
    return (


        <>


            {

                (roleau === 'User' ? <>
                    <Slide />
                </>
                    :
                    <>
                        <Slide />


                    </>
                )

            }
            {

                (roleau === 'User' ? <>
                    <UserNavbar />
                </>
                    :
                    <>

                        <HomeNavbar />

                    </>
                )

            }



{/* <img  className='bannerImg' src={SliderData} /> */}

            <Carousel
                style={{ zIndex: 1 }}
                className="banner"
                autoplaySpeed={2000}
                lazyLoad={true}
                height={"200px"}
                slideWidth={"100%"}
                slideHeight={"100"}
                autoplay={true}
                cellPadding={10}>
                <img src={SliderData[0]} width="100%" style={{height:"50vh"}}/>
                <img src={SliderData[1]} width="100%" style={{height:"50vh"}}/>
                <img src={SliderData[2]} width="100%" style={{height:"50vh"}}/>
                <img src={SliderData[3]} width="100%" style={{height:"50vh"}}/>
                    {/* {SliderData.length > 0 && SliderData?.map((elem,i)=>{
                        <img  className='bannerImg' src={elem?.length > 0 ? elem?.imageURL[0] : "null"} />

                    })} */}

              

            </Carousel>




            <br />
            <br />
            <h1>All Area:</h1>
            <br />
            <br />
            <section style={{ display: "flex", justifyContent: "space-between", textAlign: "center", flexWrap: "wrap", alignItems: "center" }}>


                {areaData ? areaData.map((category) => (


                    <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6" style={{ background: "white", color: "black", marginTop: "10px", display: "flex", justifyContent: "center" }}>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img style={{ height: "120px" }} variant="top" src={category.imageURL ? category.imageURL : <><img src={loadingimg} /></>} />
                            <Card.Body>
                                <Card.Title>{category.categoryName}</Card.Title>

                                <Button class="m-auto" style={{ backgroundColor: "#058b80", marginLeft: "4px" }} href={`ShowMarket/${category.categoryName}`}>Show Markets</Button>
                            </Card.Body>
                        </Card>
                    </div>


                )) : <img src={loadingimg} />}


            </section>


            <br />
            <br />
            <br />














            <h1>All Products</h1>

            <br />
            <br />



            <section style={{ display: "flex", justifyContent: "space-between", textAlign: "center", flexWrap: "wrap", alignItems: "center" }}>

                {products ? products.map((product) => (

                    <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6" style={{ background: "white", color: "black", marginTop: "10px", display: "flex", justifyContent: "center", cursor: "pointer" }}>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img style={{ height: "120px" }} variant="top" src={product.imageURL ? product.imageURL : <><img src={loadingimg} /></>} />
                            <Card.Body>
                                <Card.Title>{product.productTitle}</Card.Title>
                                <Card.Title>Rs-/{product.productPrice}</Card.Title>

                                <Button class="m-auto" style={{ backgroundColor: "#058b80", marginLeft: "4px" }} href={`ShowMarket/${category.categoryName}`}>Show Markets</Button>
                            </Card.Body>
                        </Card>
                    </div>



                )) : <img src={loadingimg} />
                }
            </section>

            {/* footer  */}
            <div class="row" style={{ background: "#CCFF33", color: "black", fontWeight: "bold", textAlign: "center" }}>
                <br />
                <div class="col-lg-4 col-md-6">
                <img src="/img/13karachi.png" style={{height:"60px"}}/>
                    <h6>We brought new and easy concept for SELLERS & BUYERS 
                        Now you can Purchase From your own nearest and self thought willingly market just with a click<br />  you can visit the any shop of any market at 13karachi  </h6>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h1>Useful Links</h1>
                    <p onClick={() => history.push('/')} style={{ cursor: "pointer" }}>Home</p>
                    <p onClick={() => history.push('/userregister')} style={{ cursor: "pointer" }}>sign up</p>
                    <p onClick={() => history.push('/Login')} style={{ cursor: "pointer" }}>Login</p>
                    {/* <p>About us</p> */}
                </div>
                <div class="col-lg-4 col-md-6">
                    <h1>Contact Us</h1>
                    <a style={{ cursor: "pointer" }} href='https://www.facebook.com/people/13Karachi/100082254692576/?mibextid=ZbWKwL'><FacebookIcon /></a>
                    <a style={{ cursor: "pointer" }} href='https://www.instagram.com/13karachi/'><InstagramIcon /></a>
                    <a style={{ cursor: "pointer" }} href=''><AppBlockingIcon /></a>
                </div>


            </div>




        </>

    );
};

export default Home;