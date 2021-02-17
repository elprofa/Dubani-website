import React from "react";
import { Col, Row, Form, Input } from "reactstrap";
import MoleculeBottomSectionAccueilStc from './MoleculeBottomSectionAccueil.stc';
import Bouton from '../../shared/Bouton';
import { BsArrowDown } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const MoleculeBottomSectionAccueil=()=>{
    return(
        <MoleculeBottomSectionAccueilStc className="container">
            <Col sm="6" className="left">
                <Bouton texte="SCROLL DOWN"
                    bg="transparent" 
                    couleur="#333" 
                    bg_after="#fff"
                    bg="#ccc"
                    icon={<BsArrowDown />}
                />
            </Col>
            <Col sm="6" className="right">
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
            </Col>
        </MoleculeBottomSectionAccueilStc>
    )
}

export default MoleculeBottomSectionAccueil