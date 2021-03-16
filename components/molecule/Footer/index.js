import React from 'react';
import {Row,Col,Container} from "react-bootstrap";
import FooterStc from './Footer.stc';
import Courbe from '../../shared/CourbeOndulaire';
import SousTitre from '../../shared/SousTitre';
import Texte from '../../shared/Texte';
import MonImage from '../../shared/MonImage';
import ElementMenu from '../../shared/ELementMenu';
import LineFooter from '../../shared/LineFooter';

const Menus=[
    {lien:"/elprofa",texte:"Agency"},
    {lien:"/elprofa",texte:"Services"},
    {lien:"/elprofa",texte:"Projects"},
    {lien:"/elprofa",texte:"Journal"},
    {lien:"/elprofa",texte:"Contact"}
]

const Footer = (props) => {
  return (
   
        <FooterStc>
            <Container>
                <Row>
                    <Col md={3}>
                        <MonImage 
                            chemin="/img/Logo-dubany.jpg"
                            largeur="80"
                            hauteur="40"
                        />
                        <Courbe couleur="#fff" marge_bas="40" marge_haut="80" className="CourbeTestimonaial"/>
                        <Texte 
                            couleur="#908484" 
                            marge_bas="00" 
                            alignement="left" 
                            marge_haut="20" 
                        >
                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée
                            à titre provisoire pour calibrer une mise en page, le texte définitif venant 
                            remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                        </Texte>
                    </Col>
                    <Col md={6}>
                        <MonImage 
                            chemin="/img/world_map_connected.svg"
                            
                        />
                    </Col>
                    <Col md={3} className="divMenu">
                        <ul>
                            {
                                Menus.map((menu,index)=><ElementMenu couleur="#fff" key={index} taille="22px" marge_bas="40px" texte={menu.texte} lien={menu.lien} />)
                            }
                        </ul>
                    </Col>
                    
                </Row>
                <LineFooter 
                    epaisseur="2px" 
                    couleur_bordure="#ccc" 
                    marge_bas="40px" 
                    marge_haut="40px"/>

            <Row>
                <Col md={6}>
                    <Texte 
                        couleur="#fff" 
                        alignement="left" 
                    >
                        © 2021 Mabbly, LLC. All rights reserved.
                    </Texte>
                </Col>
                <Col md={6}>
                    <Texte 
                        couleur="#fff" 
                        alignement="Right" 
                    >
                        Privacy policy
                    </Texte>
                </Col>
            </Row>
            </Container>
        </FooterStc>    
  );
}

export default Footer; 