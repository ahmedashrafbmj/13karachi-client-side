import React, {useState, useEffect} from 'react'
import HomeNavbar from './HomeNavbar';
import { useHistory } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import loadingimg from '../images/loading.gif'







const Getmarket=(props)=>{
 
    const history = useHistory()

const [loading, setLoading] = useState(false);
const [roleau, setroleau] = useState ('');
    

    document.title = "Home -  13Karachi";

    const { areaName } = useParams("");
    console.log(areaName);

  
      const [hotel, setHotel] = useState([]);


      useEffect(() => {

        const fetchMarkets = async () => {
            setLoading(true)
            const res = await fetch(`https://ahmed8364.herokuapp.com/api/getareaname/${areaName}`);

            const data = await res.json();
            console.log(data);
        
            setHotel(data);
            setLoading(false)
        };
        
        fetchMarkets()

    }, []);




const getrole=()=>{

    let roleuser = localStorage.getItem('role');

    setroleau(roleuser);
    console.log(roleau, 'roleg')


}


useEffect(() => {

getrole()

// console.log(roleau, 'getroleuseeffect')

}, []);


    

    return (

      
        <>
        
        

        {
           
               (roleau === 'User' ? <UserNavbar />  : <HomeNavbar />)

        }

        <br />
        <br />
        <br />

  

        <h1>{areaName} Market</h1>
        
        <br />
        <br />

        {
      loading?( //if
        // <h3>Loading ... </h3>
        <img src={loadingimg} />
      ): ( //else


     <Container>
      <Row>

          
            {hotel.map((product) => (
             

            
                    <Col>                    
                    <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src={product.imageURL}/> */}
                        <Card.Body>
                            <Card.Title>{product.marketName}</Card.Title>
                            <Card.Text>
                        {/* Rs.{product.productPrice}/-  */}

                            </Card.Text>
                            <Button  variant="primary" onClick={()=>alert("go to app")}>Show Shops</Button> 
                        </Card.Body>
                        </Card>
                        <br />
                        </Col>
         
                        
            ))}
      
            </Row>
      </Container>

           )
        } 


        
        


        </>
    );
};

export default Getmarket;