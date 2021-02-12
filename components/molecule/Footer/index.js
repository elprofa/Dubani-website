import React from 'react';
import {Row,Col} from "react-bootstrap";
import FooterStc from './Footer.stc';
import Courbe from '../../shared/CourbeOndulaire';
import SousTitre from '../../shared/SousTitre';
import Texte from '../../shared/Texte';
import MonImage from '../../shared/MonImage';



const Footer = (props) => {
  return (
   
        <FooterStc>
               <Container>
                   <Row>
                       <Col md={3}>
                           <MonImage 
                                chemin="fpic1.svg"
                                largeur="100"
                                hauteur="100"
                            />
                            <Courbe couleur="#fff" marge_bas="80" marge_haut="80" className="CourbeTestimonaial"/>
                            <Texte 
                                couleur="#f9f9f9" 
                                marge_bas="80" 
                                alignement="center" 
                                marge_haut="20" 
                            >
                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée
                                à titre provisoire pour calibrer une mise en page, le texte définitif venant 
                                remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                                Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                            </Texte>
                        </Col>
                        
                        <Titre 
                            texte="Testimonials " 
                            poid_font="700"/>
                       
                   </Row>
               </Container>
        </FooterStc>    
  );
}

export default Footer; 