import React, {useEffect, useRef} from "react";
import {gsap,Back,TimelineLite ,TweenMax, Power3,Power2,Expo,Circ} from 'gsap';

import SectionAccueilMoleculeRightStc from './MoleculeRightSectionAccueil.stc';
import MonImage from '../../shared/MonImage';

const SectionAccueilMoleculeRight=(props)=>{
    const molDroite=useRef(null);


    let tl = new TimelineLite({ delay: .8});
    useEffect(() => {
  
          TweenMax.from(molDroite.current, 2, {
            delay: 1.5,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
          });  
    }, [tl])
  
    return (
        <SectionAccueilMoleculeRightStc ref={molDroite}>
            <MonImage chemin="/img/undraw1.svg"  />
        </SectionAccueilMoleculeRightStc>
    )
}
export default SectionAccueilMoleculeRight;