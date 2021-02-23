import React from 'react';
import {Carousel,Col} from "react-bootstrap";
import MoleculeTestimonialStc from './MoleculeTestimonial.stc';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import Texte from '../../shared/Texte';
import "bootstrap/dist/css/bootstrap.min.css";

const SectionTestimonial = (props) => {

        testimonies=[
                {
                        detail:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utiliséeà titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum."
                }
        ]
  return (
   
        <MoleculeTestimonialStc>
                <Courbe couleur="#ccc" marge_bas="40px" marge="auto" className="CourbeTestimonaial"/>
                <Titre 
                    texte="Testimonials " 
                    poid_font="700"/>
                 
                        <Carousel>
                                <Carousel.Item>
                                        <Carousel.Caption>
                                        <Texte 
                                                couleur="#333" 
                                                marge_bas="40px" 
                                                taille="25px" 
                                                alignement="center" 
                                                marge_haut="40px" 
                                                style_font="italic"
                                                >
                                                
                                        </Texte>
                                        <Texte 
                                                couleur="#000" 
                                                marge_bas="40px" 
                                                alignement="center" 
                                                marge_haut="40px" 
                                                style_font="italic"
                                                >
                                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification .
                                        </Texte>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                                        <Carousel.Caption>
                                        <Texte 
                                                couleur="#333" 
                                                marge_bas="40px" 
                                                taille="25" 
                                                alignement="center" 
                                                marge_haut="40px" 
                                                style_font="italic"
                                                >
                                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée
                                                à titre provisoire pour calibrer une mise en page, le texte définitif venant 
                                                remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                                                Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                                        </Texte>
                                        <Texte 
                                                couleur="#000" 
                                                marge_bas="40px" 
                                                alignement="center" 
                                                marge_haut="40px" 
                                                style_font="italic"
                                                >
                                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification .
                                        </Texte>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                                        <Carousel.Caption>
                                        <Texte 
                                                couleur="#333" 
                                                marge_bas="40px" 
                                                taille="25px" 
                                                alignement="center" 
                                                marge_haut="40px" 
                                                style_font="italic"
                                                >
                                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée
                                                à titre provisoire pour calibrer une mise en page, le texte définitif venant 
                                                remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                                                Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                                        </Texte>
                                        <Texte 
                                                couleur="#000" 
                                                marge_bas="40px" 
                                                alignement="center" 
                                                marge_haut="40px" 
                                                style_font="italic"
                                                >
                                                Le lorem ipsum est, en imprimerie, une suite de mots sans signification .
                                        </Texte>
                                </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
        </MoleculeTestimonialStc>    
  );
}

export default SectionTestimonial; 