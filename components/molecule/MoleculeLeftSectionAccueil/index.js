import React, {useEffect, useRef} from "react";
import {gsap,Back,TimelineLite ,TweenMax, Power3,Power2,Expo,Circ} from 'gsap';

import { Col, Row, Form, Input } from "reactstrap";
import SectionAccueilMoleculeLeftStc from './MoleculeLeftSectionAccueil.stc';
import Bouton from '../../shared/Bouton';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';



const SectionAccueilMoleculeLeft=()=>{


    const tlm=new TimelineLite({});

    useEffect(() => {
        gsap
        .timeline({
          defaults: {
            duration: 1
          }
        })
        .from('.courbe', {
          x: 300,
          scale: 2,
          opacity:0,
          ease: "back"
        })
        .from('.soustitre', {
          x: 300,
          scale: 2,
          opacity:0,
          ease: "back"
        })
        .from('.titre', {
          x: 300,
          scale: 2,
          opacity:0,
          ease: "back"
        })
        .from('.bouton', {
            y: 400,
            scale: 2,
            opacity:0,
            ease: "back"
          })

    }, [tlm]);
    return(
        <SectionAccueilMoleculeLeftStc >
            <Courbe couleur="#0a2db0" marge_bas="40" className="CourbeAccueil" />
            <SousTitre 
                texte="WE DESIGN AND DEVELOP" 
                marge_haut="30" 
                marge_bas="20" 
                poid_font="400"/>
            <Titre 
                texte="Persuasive Websites And " 
                poid_font="700"/>
            <Titre 
                texte="Mobile App " 
                poid_font="700"/>
            <Bouton 
                texte="HIRE US" 
                bg="#ccc" 
                bg_after="#0a2db0"
                couleur="#fff"/>

        </SectionAccueilMoleculeLeftStc>
    )
}

export default SectionAccueilMoleculeLeft;