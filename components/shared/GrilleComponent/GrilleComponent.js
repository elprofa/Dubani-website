import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titre from '../Titre';
import {Row,Col} from 'reactstrap';
import GrilleComponentStc from './GrilleComponent.stc';
import MonImage from '../MonImage';
import Bouton from '../Bouton';
import { BsArrowRight } from 'react-icons/Bs';

const GrilleComponent = (props) => {
    const { position, texteTitre,colorTitre,paragraphe,picture} = props;
    if(position=="right")
    {
        return (
            <GrilleComponentStc >
                <Row id={position}>
                    <Col lg={5} className="divTexte">
                        <Titre texte={texteTitre} color={colorTitre} />
                        <p>{paragraphe}</p>
                    </Col>
                    <Col lg={5}  className="h-100 d-none d-lg-block divPictureRight">
                    <MonImage
                            chemin={picture}
                        />
                    </Col>
                      <Col lg={1} className="MonBouton">
                        <Bouton texte="MORE DETAILS" bg="transparent" marge_haut="80px" couleur="#000" icon={<BsArrowRight />} />
                      </Col>
                                      
                </Row>
            </GrilleComponentStc>
        )
    }
    else
    {
        return (
            <GrilleComponentStc >
                <Row id={position}>
                    <Col lg={6} className="h-100 d-none d-lg-block divPictureLeft">
                    <MonImage
                            chemin={picture}
                        />
                    </Col>
                    <Col lg={6} className="divTexte">
                        <Titre texte={texteTitre} color={colorTitre} />
                        <p>{paragraphe}</p>
                        <Bouton className="ml-1" texte="MORE DETAILS" bg="transparent" marge_haut="80px" couleur="#1351C9" icon={<BsArrowRight />} />
                    </Col>
                    
                </Row>
            </GrilleComponentStc>
        )
    }
  };

export default GrilleComponent;