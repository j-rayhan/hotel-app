//@flow
import React from "react";
import { Carousel } from "react-responsive-carousel";

const MyCarousel = () => (
  <div style={{ width: "600px" }}>
    <Carousel autoPlay infiniteLoop={true} showArrows={true}>
      <div>
        <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/150/150156239.jpg" />
      </div>
      <div>
        <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/150/150156225.jpg" />
      </div>
      <div>
        <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/150/150156230.jpg" />
      </div>
    </Carousel>
  </div>
);

export default MyCarousel;
