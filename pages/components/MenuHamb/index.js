import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { withRouter } from "react-router-dom";
import HamburStc from './Hamburger.stc';


const Hamburger = ({state}) => {
  //variable d'animation
 let menu = useRef(null);
 let revealMenu = useRef(null);
 let revealMenuBackground = useRef(null);
 let cityBackground = useRef(null);
 let line1 = useRef(null);
 let line2 = useRef(null);
 let line3 = useRef(null);
 let info = useRef(null);


  useEffect(() => {
    if(state.clicked === false) {
      //fermer notre menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" }
      });
    } else if (
      state.clicked === true || 
      (state.clicked === true && state.initial === null)
    ) {
        //Ouvrir notre menu
      gsap.to(menu, {
      duration: 1,
      css: { display: "block" }
  });
  gsap.to([revealMenuBackground, revealMenu], {
    duration: 1,
    opacity: 1,
    height: "100%"
  });
  staggerReveal(revealMenuBackground, revealMenu);
}
});

const staggerReveal = (node1, node2) => {
  gsap.from([node1,node2], {
    duration: .8,
    height: 0,
    transformOrigin: 'right top',
    skewY: 2,
    ease: 'power3.inOut',
    stagger: {
      amount: 0.1
    }
  })
}

return (
    <HamburStc >
      <div ref={el => (menu = el)} 
      className='hamburger-menu'>
        <div ref={el => (revealMenuBackground = el)} className='menu-secondary-background-color'></div>
        <div ref={el => (revealMenu = el)} className='menu-layer'>
        <div ref={el => (cityBackground = el)} className='menu-city-background'></div>         
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <a ref={el => (line1 = el)} href='#/opportunities'>Opportunities</a>
                  </li>
                  <li>
                    <a ref={el => (line2 = el)} href='#/solutions'>Solutions</a>
                  </li>
                  <li>
                    <a ref={el => (line3 = el)} href='#/contact'>Contact us</a>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className='locations'>
                Locations:
                  <span>Libreville</span>
                  <span>Ntoum</span>
                  <span>Kango</span>
                  <span>Lambarené</span>
                  <span>Makongogno</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HamburStc>
  );
};

export default Hamburger;