import "./Banner.scss";
import React, { useState } from 'react';
    import Carousel from 'react-bootstrap/Carousel';
// import carousel from 'react-bootstrap/carousel';
import slide1 from "../../../assets/phone.jpg"
import slide2 from "../../../assets/camera.jpg"
import slide3 from "../../../assets/headphone.jpg"
import slide4 from "../../../assets/tab.jpg"
import styled from "@emotion/styled";
Carousel.Caption=styled.div`
 background: rgba(16, 16, 16, 0.27);
            text-align: left;
            position: inherit;
          box-shadow: 0px 2px 2px 2px rgba(2, 2, 2, 0.43);
          position: absolute;
          right: 15%;
          bottom: 40px;
          left: 15%;
          z-index: 10;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #fff;
          text-align: center;
          @include lg  
            {
              padding: 3rem !important;
          }
          @include md  
            {
              padding: 1.5rem !important;
          }
          @include sm  
            {
              padding: 1rem !important;
          }`
Carousel.Item.item1=styled.div`
  min-height: 568px;
  background: url(${slide1}) no-repeat center;
    background-size: cover;
    @media (max-width: 1080px)
{    min-height: 500px;
}
@media (max-width: 991px)
   { min-height: 430px;
}
@media (max-width: 768px)
{    min-height: 400px;
}
@media (max-width: 736px)
{    min-height: 380px;
}
@media (max-width: 440px)
{    min-height: 300px;
}
@media (max-width: 384px)
{    min-height: 270px;
}
@media (max-width: 320px)
{    min-height: 240px;
}`
Carousel.Item.item2=styled.div`
  min-height: 568px;
  background: url(${slide2}) no-repeat center;
    background-size: cover;
    @media (max-width: 1080px)
{    min-height: 500px;
}
@media (max-width: 991px)
   { min-height: 430px;
}
@media (max-width: 768px)
{    min-height: 400px;
}
@media (max-width: 736px)
{    min-height: 380px;
}
@media (max-width: 440px)
{    min-height: 300px;
}
@media (max-width: 384px)
{    min-height: 270px;
}
@media (max-width: 320px)
{    min-height: 240px;
}`
Carousel.Item.item3=styled.div`
  min-height: 568px;
  background: url(${slide3}) no-repeat center;
    background-size: cover;
    @media (max-width: 1080px)
{    min-height: 500px;
}
@media (max-width: 991px)
   { min-height: 430px;
}
@media (max-width: 768px)
{    min-height: 400px;
}
@media (max-width: 736px)
{    min-height: 380px;
}
@media (max-width: 440px)
{    min-height: 300px;
}
@media (max-width: 384px)
{    min-height: 270px;
}
@media (max-width: 320px)
{    min-height: 240px;
}`
Carousel.Item.item4=styled.div`
  min-height: 568px;
  background: url(${slide4}) no-repeat center;
    background-size: cover;
    @media (max-width: 1080px)
{    min-height: 500px;
}
@media (max-width: 991px)
   { min-height: 430px;
}
@media (max-width: 768px)
{    min-height: 400px;
}
@media (max-width: 736px)
{    min-height: 380px;
}
@media (max-width: 440px)
{    min-height: 300px;
}
@media (max-width: 384px)
{    min-height: 270px;
}
@media (max-width: 320px)
{    min-height: 240px;
}
`

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
     <div className="carousel">

     
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item >
          <Carousel.Item.item1>
            <div className="container">
            <div className="w3l-space-banner">
            <Carousel.Caption className="carousel-caption">
            <p>Get flat
								<span>10%</span> Cashback</p>
							<h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">The
								<span>Big</span>
								Sale
							</h3>
              <button><a className="button2">Shop Now </a></button>	

            </Carousel.Caption>
            </div>
            </div>
          </Carousel.Item.item1>
          </Carousel.Item>
          <Carousel.Item.item2 className="carousel-item item2">
          
             <div className="container">
            <div className="w3l-space-banner"> 
            <Carousel.Caption className="carousel-caption">
            <p>Get flat
            <span>10%</span> Cashback</p>
            <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">New
            <span>Standard</span>
            </h3>
            <button><a className="button2">Shop Now </a></button>	

            </Carousel.Caption>
            </div>
            </div>
          </Carousel.Item.item2>
          <Carousel.Item.item3  className="carousel-item item3">
         
             <div className="container">
            <div className="w3l-space-banner"> 
            <Carousel.Caption className="carousel-caption">
            <p>Get Now
								<span>40%</span> Discount</p>
							<h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">Today
								<span>Discount</span>
							</h3>
						<button><a className="button2">Shop Now </a></button>	
            </Carousel.Caption>
            </div>
            </div>
          </Carousel.Item.item3>
          <Carousel.Item.item4  className="carousel-item item4">
          
             <div className="container">
            <div className="w3l-space-banner"> 
            <Carousel.Caption className="carousel-caption">
             <p>Get Now
								<span>40%</span> Discount</p>
							<h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">Today
								<span>Discount</span>
							</h3>
              <button><a className="button2">Shop Now </a></button>	

            </Carousel.Caption>
            </div>
            </div>
          </Carousel.Item.item4>
        </Carousel>
        </div>
      );
    }


export default Banner;
