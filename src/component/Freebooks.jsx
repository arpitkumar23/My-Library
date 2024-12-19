import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json"; 
import Card from './Card';

const Freebooks = () => { 
  const filterData = list.filter((data) => data.category === "free");
  console.log(filterData); 
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" mx-auto md:px-16 px-4 text-black">
      <h1 className="font-bold text-xl pb-2 text-black">Free Offered Courses</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam
        molestias nisi magnam! At, dolorem accusantium quasi modi aperiam placeat
        rerum officia distinctio illo voluptas deserunt iste nulla. Sapiente, dolorum!
      </p>

      <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Card item={item} key={item.id} />  
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebooks;
