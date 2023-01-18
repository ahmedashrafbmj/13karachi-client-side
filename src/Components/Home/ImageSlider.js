import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Carousel from 'react-img-carousel';
import loadingimg from '../images/loading.gif'


const ImageSlider = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  console.log(slides ,"slides")
  const length = slides.length;
  const [SliderData, setSliderData] = useState([0])

  useEffect(() => {
    fetchCarousel()
    next()

  }, []);


  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }


  const next=()=>{
    setTimeout(() => {
      console.log('next')
      nextSlide()
    }, 5000);

    setTimeout(() => {
      console.log('prev')
      prevSlide()
    }, 10000);
  }

  const fetchCarousel = async () => {

    const res = await fetch('https://ahmed8364.herokuapp.com/api/allgetcarousel');

    const datacarousel = await res.json();
    
    console.log(datacarousel, 'carousel');

    setSliderData(datacarousel);  
 
};








  return (
    <>
    {slides && slides.map((slide,index)=>{
      <img src={ index === current ? slide[0]?.imageURL[0] : 'null' }/>

    })}
      {/* <FaArrowAltCircleLeft className='left-arrow'  onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
      <Carousel   style={{zIndex: 1}}
                className="banner"
                autoplaySpeed={2000}
                lazyLoad={true}
                height={"200px"}
                slideWidth={"100%"}
                slideHeight={"200"}
                autoplay={true}
                cellPadding={5}>
 {slides.map((slide, index) => { {index === current && (<img key={index} className='bannerImg' src={slide.imageURL ? slide.imageURL : <> <img src={loadingimg}/></> } />
)} })}

                </Carousel>
    
      {/* {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              // <img src={slide.imageURL} alt='image' className='image' />
               <Carousel
                style={{zIndex: 1}}
                className="banner"
                autoplaySpeed={2000}
                lazyLoad={true}
                height={"200px"}
                slideWidth={"100%"}
                slideHeight={"200"}
                autoplay={true}
                cellPadding={5}>
                {
                    SliderData.map((slide, index) => {
                        return (
<>

<img key={index} className='bannerImg' src={slide.imageURL ? slide.imageURL : <> <img src={loadingimg}/></> } />
</>

                        
                            )

                    })
                }
                
            </Carousel> 
            )}
          </div>
        );
      })} */}
    </>
  );
};

export default ImageSlider;
