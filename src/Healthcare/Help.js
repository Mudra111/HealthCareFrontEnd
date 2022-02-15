import React, { useState } from 'react';
import mainPic from "./images/Blood-Donation.png";
import C1 from "./images/C1.jpg";
import C2 from "./images/C2.jpg";
import "./Help.css";

export const Help = () => {
    var slides = document.querySelectorAll('.sld');
    var btns = document.querySelectorAll('.bt');
    let currentSlide = 0;


    // Js formanual nav 
    var manualNav = function (manual) {
        slides.forEach((sld) => {
            sld.classList.remove('active');

            btns.forEach((bt) => {
                bt.classList.remove('active');
            });
        });

        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
    }

    btns.forEach((bt, i) => {
        bt.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
        });
    });

    // Automatic slide 
    var repeat = function (activeClass) {
        let active = document.getElementsByClassName('active');
        let i = 1;

        var repeater = () => {
            setTimeout(function () {
                [...active].forEach((activeSlide) => {
                    activeSlide.classList.remove('active')
                });

                slides[i].classList.add('active');
                btns[i].classList.add('active');
                i++;

                if (slides.length == i) {
                    i = 0;
                }

                if (i >= slides.length) {
                    return;
                }

                repeater();
            }, 70000);
        }
        repeater();
    }
    repeat();

    return (
        <div>
            <div className="display">
                <img src={mainPic} alt="" />
            </div>
            <h1 className='center'>Who Can You Help By Donating Blood ?</h1>

            <h1 className='title1'>Cancer Patients</h1>

            <div className="img-sld">
                <div className="sld active">
                    <img src={C1} alt="" />
                    <div className="info">
                        <h2>Ideal Donation Type</h2>
                        <p>Platelets donation, because certain cancers and cancer treatments prevent patients from producing their own.</p>
                    </div>
                </div>

                <div className="sld">
                    <img src={C2} alt="" />
                    <div className="info">
                        <h2>Ideal Blood Type</h2>
                        <p>A positive, A negative, B positive, O positive, AB positive and AB negative</p>
                    </div>
                </div>

                <div className="navigation">
                    <div className="bt active"></div>
                    <div className="bt"></div>
                </div>
            </div>

        </div>
    )
}
