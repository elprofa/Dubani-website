import React, {useEffect, useRef} from "react";
import {gsap,Back,TimelineLite ,TweenMax, Power3,Power2,Expo,Circ} from 'gsap';
import DubaniStc from './Dubani5.stc';

const Dubani=()=>{
    const tlm=new TimelineLite({});

    useEffect(() => {
        TweenMax.from(".left", 1.6, {
            delay: 0.6,
            width: 0,
            ease: Expo.easeInOut
          })
      
          TweenMax.from(".right", 1.6, {
            delay: 0.6,
            width: 0,
            ease: Expo.easeInOut
          })
      
          TweenMax.from(".logo", 1, {
            delay: 1,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
          })
      
          TweenMax.from(".menu", 1, {
            delay: 1.2,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
          });
      
          TweenMax.from(".categories", 1, {
            delay: 1.4,
            opacity: 0,
            x: -150,
            ease: Expo.easeInOut
          });
      
          TweenMax.from(".search", .8, {
            delay: 1.6,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
          });
      
          TweenMax.from(".bag", 1, {
            delay: 1.6,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
          });
      
          TweenMax.staggerFrom(".media ul li", 1, {
            delay: 2,
            opacity: 0,
            x: -20,
            ease: Power3.easeInOut
          }, 0.08);
      
          TweenMax.from(".size", 1, {
            delay: 1.8,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
          });
      
          TweenMax.staggerFrom(".size ul li", .3, {
            delay: 2,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut
          }, 0.08);
      
          TweenMax.staggerFrom(".dot", 1, {
            delay: 2.4,
            opacity: 0,
            x: 20,
            ease: Power3.easeInOut
          }, 0.08);
      
          TweenMax.from(".bottomnav", 1, {
            delay: 2.4,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
          });
      
          TweenMax.from(".bottomnav ul li:first-child", .5, {
            delay: 2.4,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
          });
      
          TweenMax.from(".bottomnav ul li:last-child", .6, {
            delay: 2.4,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
          });
      
          TweenMax.from(".product-img", 3, {
            delay: 2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
          });
      
          TweenMax.from(".product-title", 3, {
            delay: 2.2,
            opacity: 0,
            y: 50,
            ease: Expo.easeInOut
          });
      
          TweenMax.from(".product-subtitle", 3, {
            delay: 2.4,
            opacity: 0,
            y: 50,
            ease: Expo.easeInOut
          });
    }, [tlm]);
    return (
        <DubaniStc className="wrapper">
            <div className="left"></div>
            <div className="right"></div>

            <div className="strips">
                <div className="left-strip"></div>
                <div className="right-strip"></div>
            </div>

            <div className="nav">
            <div className="logo">Levi's<span className="reg">&reg;</span></div>

            <div className="menu"><i className="fa fa-bars"></i></div>

            <div className="categories">
                <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                </ul>
            </div>

            <div className="search"><i className="fa fa-search">x</i></div>

            <div className="bag"><i className="fa fa-shopping-bag">v</i></div>
            </div>

            <div className="media">
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>

            <div className="size">
                <ul>
                    <span>Size:</span>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                </ul>
            </div>

            <img className="product-img" src="https://raw.githubusercontent.com/codicts/Levis-Landing-Page/master/levi-shirt.jpg" alt="" />

            <div className="product-text">
                <h1 className="product-title">colorblock</h1>
                <p className="product-subtitle">Full sleeve t-shirt</p>
            </div>

            <div className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            <div className="bottomnav">
                <div className="bottomnav-img"></div>

                <ul>
                    <li><i className="fa fa-chevron-left">l</i></li>
                    <li><i className="fa fa-chevron-right"> r </i></li>
                </ul>
            </div>

        </DubaniStc>

    )
};
export default Dubani;