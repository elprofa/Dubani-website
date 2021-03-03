import React from 'react';
import ServiceStc from './SectionServicePageService.stc';
import MoleculeService from '../../molecule/MoleculeServicePageService';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';
import {Container,Row,Col} from 'reactstrap';



const SectionService=()=>{

    
const services=[
    {
        titre:"Digital Marketing",
        picture:"/img/fpic1.svg",
        position:"left",
        description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,"
    },
    {
        titre:"Web Experience",
        picture:"/img/fpic1.svg",
        position:"right",
        description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,"
    },
    {
        titre:"App Developpement",
        picture:"/img/fpic1.svg",
        position:"left",
        description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,"
    }
]

    return (
        <ServiceStc>
            <Container>
                <Row>
                    <Col md={12}>
                    <Courbe couleur="#ccc" marge_bas="40px" className="CourbeAccueil" />
                        <SousTitre 
                            texte="AIRE D’EXPERTISE" 
                            marge_haut="30px" 
                            marge_bas="20px" 
                            poid_font="400"/>
                        <Titre 
                            texte="Services " 
                            poid_font="700"/>
                    </Col>
                </Row>
                {
                    services.map((service,index)=>
                        <MoleculeService 
                        key={index}
                        titre={service.titre} 
                        position={service.position}
                        picture={service.picture} 
                        description={service.description}
                        />
                    )
                }
                
            </Container>
        </ServiceStc>
    )
}
export default SectionService;