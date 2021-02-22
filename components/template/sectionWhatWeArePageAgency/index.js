import React from 'react';
import WhatWeAreStc from './sectionWhatWeArePageAgency.stc';
import Texte from '../../shared/Texte';
import SousTitre from '../../shared/SousTitre';
import {Container,Row,Col} from 'reactstrap';

const SectionWhatWeArePageAgency=()=>{
    return (
        <WhatWeAreStc>
            <Container>
                <Row>
                    <Col lg={6}>
                        <SousTitre 
                            texte="We Drive Positive Change" 
                            marge_haut="30px" 
                            marge_bas="40px" 
                            poid_font="600"
                            couleur="#333"
                            />
                        <Texte couleur="#333" marge_haut="20">
                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée
                            à titre provisoire pour calibrer une mise en page, le texte définitif venant 
                            remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                            Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                        </Texte>
                    </Col>
                    <Col lg={6}>
                    <SousTitre 
                        texte="We Are Rational Together" 
                        marge_haut="30px" 
                        marge_bas="40px" 
                        poid_font="600"
                        couleur="#333"
                        />
                        <Texte couleur="#333" marge_haut="20">
                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée
                            à titre provisoire pour calibrer une mise en page, le texte définitif venant 
                            remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                            Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                        </Texte>
                    </Col>
                </Row>
            </Container>
        </WhatWeAreStc>
    )
}

export default SectionWhatWeArePageAgency;