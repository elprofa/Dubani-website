import React, {useEffect, useRef} from "react";
import {gsap,Back,TimelineLite ,TweenMax, Power3,Power2,Expo,Circ, TimelineMax} from 'gsap';

import HamburgerStc from './Hamburger.stc';

const Dubany=()=>{

    let MySvg=useRef(null);
    let lineOne=useRef(null);
    let lineTwo=useRef(null);
    let lineThree=useRef(null);

    const tlm=new TimelineMax({});
    const toggleMenu=new TimelineMax({paused:false,reversed:true});

    // TweenMax.to(MySvg.current,2,{x:400});
    // const lines=['.line-one','.line-two','.line-three'];

    let lines=[];

    useEffect(() => {
        
        lines=[lineOne.current,lineTwo.current,lineThree.current];
        tlm.paused(true);
        tlm.staggerTo(lines,0.25,{scaleX:1.5,repeat:4,yoyo:false},0.125);

        toggleMenu
        .to(lineTwo.current,0.125,{scaleX:0})
        .to(lineOne.current,0.125,{rotation:45,transformOrigin:"50% 50%",y:8})
        .to(lineThree.current,0.125,{rotation:-45,transformOrigin:"50% 50%",y:-8});

    }, [tlm,toggleMenu])


    const svgMousseEnter=()=>{
        toggleMenu.play();
        // toggleMenu.reverse();
        // tlm.play();

        // tlm.staggerTo(lines,0.25,{scaleX:1.5,repeat:4,yoyo:false},0.125);
        // tlm
        // .to(lineOne.current,1,{scaleX:1.5})
        // .to(lineOne.current,1,{scaleX:1});
        //
    }

    const svgMousseLeave=()=>{
        toggleMenu.reverse();
    }

    return(
        <HamburgerStc>
            <svg onMouseLeave={svgMousseLeave} onMouseEnter={svgMousseEnter} ref={MySvg} className="hamburger" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 100 100' >
               <line ref={lineOne} className="line-one" x1="25" y1="42" x2="75" y2="42" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="4" />
               <line ref={lineTwo} className="line-two" x1="25" y1="50" x2="75" y2="50" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="4" />
               <line ref={lineThree} className="line-three" x1="25" y1="58" x2="75" y2="58" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="4" />
            </svg>
        </HamburgerStc>
    )
}

export default Dubany;