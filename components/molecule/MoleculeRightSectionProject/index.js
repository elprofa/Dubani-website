import React from 'react';
import { useRef, useEffect } from 'react';
import MoleculeRightSectionProjectStc from './MoleculeRightSectionProject.stc';
import MonImage from '../../shared/MonImage';
import styled from "styled-components";
import { gsap, TweenMax } from 'gsap';
//import { ExpoScaleEase } from 'gsap/EasePack';

const Wrapper = styled.div`
  .ellipse-container {
    width: 608px;
    height: 608px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    margin: 0 auto;
  }

  .ellipse {
    position: absolute;
    top: 0;
    border-radius: 50%;
    border-style: solid;
  }

  .ellipse.thin {
    //width: 100%;
    //height: 100%;
  }

  .ellipse.thick {
    width: 98%;
    height: 98%;
    border-width: 10px;
    border-color: #000;
    top: 12px;
    left: 12px;
  }

  .ellipse.yellow {
    width: 98%;
    height: 98%;
    border-width: 10px;
    border-color: #007bff transparent;
    transform: rotate(-45deg);
    top: 12px;
    left: 12px;
    animation: ellipseRotate 25s ease-in-out infinite;
  }

  @keyframes ellipseRotate {
    0% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(-405deg);
    }
  }
`;

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
      <Wrapper>
        <MoleculeRightSectionProjectStc>
            <div ref={animaRef} className='animaRef' >
                <MonImage chemin="/img/android.svg" />
            </div>
            <div className='ellipse-container' >
              <div className='ellipse thin'></div>
              <div className='ellipse thick'></div>
              <div className='ellipse yellow'></div>
            </div>
        </MoleculeRightSectionProjectStc>
          </Wrapper>
    );
  }
export default MoleculeRightSectionProject;