import React from 'react';
import {Carousel,Col} from "react-bootstrap";
import MoleculeTestimonialStc from './MoleculeTestimonial.stc';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import Texte from '../../shared/Texte';
import "bootstrap/dist/css/bootstrap.min.css";

const SectionTestimonial = (props) => {

       const testimonies=[
                {
                        auteur:"RH Expatsa",
                        detail:<p>Une collaboration fructueuse entre le X-Patsa et Dubani Agency, 
                        l’agence de communication digital qui nous a accompagnés dans 
                        l’élaboration de notre stratégie de communication. 
                        C’est un sacré challenge que Dubani Agency a relevé, pour cerner 
                        la complexité de notre fonctionnement en réseau associatif et 
                        travailler en concertation avec les membres du conseil 
                        d’administration, les salariés et les membres associés !
                        </p>
                },
                {
                        auteur:"GSN AUTO",
                        detail:<p>
                                Nous avons choisi l’agence Dubani Agency pour nous accompagner 
                                dans la mise en place d’une stratégie RSE. Nous avons 
                                immédiatement été séduits par le positionnement très engagé 
                                de David. 
                                Il a rapidement compris les enjeux de notre secteur d’activité 
                                et ses spécificités. Malgré le contexte sanitaire compliqué, 
                                Dubani Agency a parfaitement su animer nos réunions de 
                                travail à distance en étant à l’écoute et en sachant orienter 
                                notre réflexion pour co-construire notre Raison d’Etre et 
                                un plan d’actions qui a eu l’adhésion de tous. 
                                Ses qualités d’écoute et ses propositions concrètes sont des 
                                vrais atouts pour nous aider dans notre démarche. 
                                Merci Dubani Agency pour cette belle collaboration 
                                qui n’en est qu’à ses débuts !

                        </p>
                }
                
        ]
  return (
   
        <MoleculeTestimonialStc>
                <Courbe couleur="#ccc" marge_bas="40px" marge="auto" className="CourbeTestimonaial"/>
                <Titre 
                    texte="Testimonials " 
                    poid_font="700"/>
                        
                        <Carousel>
                                {
                                        testimonies.map((testimony,index)=> 
                                        <Carousel.Item key={index}>
                                                <Carousel.Caption>
                                                        <Texte 
                                                                couleur="#333" 
                                                                marge_bas="40px" 
                                                                taille="25px" 
                                                                alignement="center" 
                                                                marge_haut="40px" 
                                                                style_font="italic"
                                                                >
                                                                {testimony.detail}
                                                        </Texte>
                                                        <Texte 
                                                                couleur="#000" 
                                                                marge_bas="40px" 
                                                                alignement="center" 
                                                                marge_haut="40px" 
                                                                style_font="italic"
                                                                >
                                                                {testimony.auteur}
                                                        </Texte>
                                                </Carousel.Caption>
                                        </Carousel.Item>)
                                }
                               
                       
                        </Carousel>
                </MoleculeTestimonialStc>    
  );
}

export default SectionTestimonial; 