import React, {useEffect, useRef} from "react";
import {gsap,Back,TimelineLite ,TweenMax, Power3,Power2,Expo,Circ} from 'gsap';
import MoleculeLeft from '../../molecule/MoleculeLeftSectionAccueil';
import MoleculeRight from '../../molecule/MoleculeRightSectionAccueil';
import {Row,Col} from "react-bootstrap";
import SectionAccueilStc from './SectionAccueil.stc';
import MoleculeBottom from '../../molecule/MoleculeBottomSectionAccueil';

const SectionAccueil = (props) => {
  const tlm=new TimelineLite({});
  const molGauche=useRef(null);
  const molDroite=useRef(null);
  const molBottom=useRef(null);


  let tl = new TimelineLite({ delay: .8});
  useEffect(() => {

        TweenMax.from(molGauche.current, 2, {
          delay: 1.5,
          y: 20,
          opacity: 0,
          ease: Expo.easeInOut
        });
        
        TweenMax.from(molDroite.current, 2, {
          delay: 2.5,
          y: 20,
          opacity: 1,
          ease: Expo.easeInOut
        });

  }, [tl])

  return (
   
        <SectionAccueilStc>
           <Row>
            <Col lg={6}>
                    <MoleculeLeft reference={molGauche} />
                </Col>
                <Col lg={6}>
                    <MoleculeRight  />
                </Col>
           </Row>
            <MoleculeBottom />
        </SectionAccueilStc>    
  );
}

export default SectionAccueil; 