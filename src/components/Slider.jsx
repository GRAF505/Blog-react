import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../assets/images/slider_China.jpg';
import slide2 from '../assets/images/slider_Kor.jpg';
import slide3 from '../assets/images/slider_Mong.jpg';
import slide4 from '../assets/images/slider_Rest.jpg';


const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    slide1,
    slide2,
    slide3,
    slide4,
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image} alt={`Слайд ${index + 1}`} className="slider__image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;