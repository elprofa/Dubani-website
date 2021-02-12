import React from 'react';
import {Row,Col} from "react-bootstrap";
import MoleculeTestimonialStc from './MoleculeTestimonial.stc';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import Texte from '../../shared/Texte';



const SectionTestimonial = (props) => {
  return (
   
        <MoleculeTestimonialStc>
                <Courbe couleur="#ccc" marge_bas="40" marge="auto" className="CourbeTestimonaial"/>
                <Titre 
                    texte="Testimonials " 
                    poid_font="700"/>
                 <Texte 
                    couleur="#333" 
                    marge_bas="40" 
                    taille="25" 
                    alignement="center" 
                    marge_haut="40" 
                    style_font="italic"
                   >
                    Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée
                    à titre provisoire pour calibrer une mise en page, le texte définitif venant 
                    remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                    Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </Texte>
            <Texte 
                    couleur="#000" 
                    marge_bas="40" 
                    alignement="center" 
                    marge_haut="40" 
                    style_font="italic"
                   >
                    Le lorem ipsum est, en imprimerie, une suite de mots sans signification .
            </Texte>
        </MoleculeTestimonialStc>    
  );
}

export default SectionTestimonial; 