import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../Assets/Images/s1.webp";
import sliderImg1 from "../../Assets/Images/s2.webp";
import "./banner.css"

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  JOURNEY TO <span>EXPLORE WORLD</span>
                </h5>
                <p className="sub_text">
                Embark on a thrilling global adventure that takes you through breathtaking landscapes, vibrant cultures, and unforgettable experiences that will transform your perspective and ignite your wanderlust.

                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  BEAUTIFUL PLACE <span>TO VISIT</span>
                </h5>
                <p className="sub_text">
                Discover hidden gems and awe-inspiring destinations that promise to captivate your imagination, from pristine tropical beaches to majestic mountain ranges, each location offering a unique and magical journey that will create memories to last a lifetime.

                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
