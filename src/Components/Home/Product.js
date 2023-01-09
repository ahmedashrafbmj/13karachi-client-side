import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

const Product = ({data}) => {   
    console.log(data,"data")
  return (
    <>
    {data.map((elem,i)=>{
 <div style={{display:"flex",justifyContent:"space-around",textAlign:"center",flexWrap:"wrap",alignItems:"center"}}>
   
    
 <Card 
      hoverable
      style={{
        width: 240,
      }}
      key={i}
      cover={<img alt="example" src={elem.imageURL} />}
    >
      <Meta title={elem.productTitle} description={elem.productPrice} />
    </Card>
 
    
 </div>      
    })}
   
    </>
    )
}

export default Product