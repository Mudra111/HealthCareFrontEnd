import React from "react";
import "./Home.css";
import Img1 from "./images/HomeSlider1.jpg";
import Img2 from "./images/HomeSlider22.jpg";
import Img3 from "./images/HomeSlider33.jpg";
import Slider from "./slider_home";
import CommonSympt from "./CommonSympt";

export const Home = () => {
  return (
    <div className="home">
      <div className="main-slider-1">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators bottom-btn">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Img1} class="d-block w-100" alt="..." />
              <div>
                <h1 className="Slide1Con1">WELCOME TO HOSPITAL</h1>
                <h4 className="Slide1Con2">BE CALM QUIT COOL.</h4>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Img2} class="d-block w-100" alt="..." />
              <div>
                <h1 className="Slide2Con1">TRY TO BE HEALTHY</h1>
                <h4 className="Slide2Con2">AIN'T THAT NICE?</h4>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Img3} class="d-block w-100" alt="..." />
              <div>
                <h1 className="Slide3Con1">BE AWESOME</h1>
                <h4 className="Slide3Con2">IN A SMOOTH WAY</h4>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev prev-btn"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next next-btn"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div>
        <Slider />
      </div>

      <div>
        <CommonSympt />
      </div>
    </div>
  );
};
