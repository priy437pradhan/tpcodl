import  { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './body.scss';
import SlideOne from './SlideOne';
import SecondSlider from './SecondSlider';
import ThirdSlider from './ThirdSlider';
import FourthSlider from './FourthSlider';
import FifthSlider from './FifthSlider';
import SixthSlider from './SixthSlider';
import SeventhSlider from './SevenSlider';


function VerticalSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true, 
    verticalSwiping: true, 
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (sliderRef.current) {
      if (e.deltaY > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
  };

  return (
    <div className="vertical-slider" onWheel={handleWheel}>
      <Slider {...settings} ref={sliderRef} >
        <div className="slide bgslide" >
          <SlideOne/>
        </div>
        <div className="slide bgslide" >
        <SecondSlider/>
        </div>
        <div className="slide bgslide" >
          <ThirdSlider/>
        </div>
        <div className="slide bgslide" >
          <FourthSlider/>
        </div>
        <div className="slide bgslide" >
          <FifthSlider/>
        </div>
        <div className="slide bgslide" >
          <SixthSlider/>
        </div>
        <div className="slide bgslide" >
          <SeventhSlider/>
        </div>
      </Slider>
    </div>
  );
}

export default VerticalSlider;
