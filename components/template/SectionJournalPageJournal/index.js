import React from 'react';
import JournalStc from './SectionJournalPageJournal.stc';
import MoleculeJournal from '../../molecule/MoleculeJournalPageJournal';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';
import MonImage from '../../shared/MonImage';
import {Container,Row,Col} from 'reactstrap';




const SectionService=()=>{

    
const services=[
    
]

    return (
        <JournalStc>
            <Container>
                
                <Row>
                    <Col md={9}>
                    <Courbe couleur="#ccc" marge_bas="40px" className="CourbeAccueil" />
                        <SousTitre 
                            texte="OUR" 
                            marge_haut="30px" 
                            marge_bas="20px" 
                            poid_font="400"/>
                        <Titre 
                            texte="Journal " 
                            poid_font="700"/>
                    </Col>
                    <Col md={3}>
                        <MonImage chemin="/img/fpic1.svg" />
                    </Col>
                </Row>
                <br/>
                <br/>
                
                {
                    services.map((service,index)=>
                    
                        <MoleculeJournal 
                        key={index}
                        titre={service.titre} 
                        picture={service.picture} 
                        description={service.description}
                        />
                    )
                }
                
            </Container>
        </JournalStc>
    )
}
export default SectionService;