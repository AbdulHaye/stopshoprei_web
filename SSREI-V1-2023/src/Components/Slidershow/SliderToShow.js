import React from 'react'
import Slider from "react-slick";
import rightarrow from"./../../Assets/rightarrow.png"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#00235A" }}
        onClick={onClick}
      ><img src={rightarrow} /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, display: "block", background: "#00235A", color: "#00235A", borderRadius: "100%", width:"4%", height:"100%", }}
        onClick={onClick}
      ><img src={rightarrow} className='' /></div>
    );
  }
function SliderToShow() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className='container' style={{textAlign:"center"}}>
    <h2>Custom Arrows</h2>
    <Slider {...settings}>
      <div>
 <img src={rightarrow} style={{color: "black", backgroundColor:"black"}} />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  </div>
  )
}

export default SliderToShow
