import React from 'react'
import { useState, useEffect } from "react";
import "./Help1.css";
import mainPic from "./images/Blood-Donation.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import C1 from "./images/C1.jpg";
import C2 from "./images/C2.jpg";

export const Help1 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        console.log("next");
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        console.log("prev");
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);
    return (
        <div>
            <div className="display">
                <img src={mainPic} alt="" />
            </div>
            <h1 className='center'>Who Can You Help By Donating Blood ?</h1>

            <h1 className='title1'>Registration</h1>


            <div className="slder">
                <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
                <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
                {sliderData.map((slide, index) => {
                    return (
                        <div
                            className={index === currentSlide ? "sld current" : "sld"}
                            key={index}
                        >
                            {index === currentSlide && (
                                <div>
                                    <img src={slide.image} alt="slide" className="image" />
                                    <div className="content">
                                        <h2>{slide.heading}</h2>
                                        <p>{slide.desc}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

        </div>
    )
}
