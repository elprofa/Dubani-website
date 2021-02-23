import React from 'react';
import { useRef, useEffect } from 'react';
import MoleculeRightSectionProjectStc from './MoleculeRightSectionProject.stc';
import MonImage from '../../shared/MonImage';
//import { TweenMax, Power3 } from 'gsap';
import gsap from 'gsap';

const MoleculeRightSectionProject=()=>{

  //const animaRef = useRef (null);
  //useEffect (() => { 
    //gsap.from (animaRef.current, { 
      //opacity: 0.5, 
      //duration: 15, 
    //});
   //}, []);

   const animaRef = useRef (null); 
   useEffect (() => {   
    gsap.to (animaRef.current, 
  {
    opacity: 0.1, 
    easy: "elastic.out",
    //x: "random(0, 200)", 
    duration: 3,
    repeat: -2,
    repeatDelay: 1,
    yoyo: true,
    repeatRefresh: true,
    });
  }, []);

    return (
        <MoleculeRightSectionProjectStc>
            <div ref={animaRef} className='animaRef' >
                <MonImage chemin="/img/android.svg" />
            </div>
        </MoleculeRightSectionProjectStc>
    );
  }
export default MoleculeRightSectionProject;