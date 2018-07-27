//@flow
import React from "react";
import { Carousel } from "react-responsive-carousel";

const MyCarousel = () => (
  <div>
    <Carousel autoPlay infiniteLoop={true} showArrows={true}>
      <div>
        <img
          alt="img-1"
          src="https://s-ec.bstatic.com/images/hotel/max1024x768/150/150156239.jpg"
        />
      </div>
      <div>
        <img
          alt="img-2"
          src="https://t-ec.bstatic.com/images/hotel/max1024x768/150/150156225.jpg"
        />
      </div>
      <div>
        <img
          alt="img-3"
          src="https://t-ec.bstatic.com/images/hotel/max1024x768/150/150156230.jpg"
        />
      </div>
    </Carousel>
  </div>
);

export default MyCarousel;
