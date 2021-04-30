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
                            texte="Nous stimulons votre activité" 
                            marge_haut="30px" 
                            marge_bas="40px" 
                            poid_font="600"
                            couleur="#00418f"
                            />
                        <Texte couleur="#333" marge_haut="20">
                        La digitalisation  est l'élément par excellence d'accroître le portefeuille 
                        client de votre  entreprise et de grandir sa notoriété car il touche plusieurs 
                        cibles. DUBANI AGENCE se sert de cet atout pour attirer et conquérir de nouvelles
                         parts de marché, vous avez toute la planète à conquérir sans limites. Nos experts
                           vous accompagnent  pour booster votre vision, votre potentiel afin de grandir 
                           votre visibilité et être le meilleur à l'échelle international.
                        </Texte>
                    </Col>
                    <Col lg={6}>
                    <SousTitre 
                        texte="Une expertise dans le numérique qui ne dit pas son nom" 
                        marge_haut="30px" 
                        marge_bas="40px" 
                        poid_font="600"
                        couleur="#00418f"
                        />
                        <Texte couleur="#333" marge_haut="20">
                        l’expertise de DUBANI AGENCE est dans la création, et le développement 
                        des sites flexibles capable de toucher votre sensibilité en un temps 
                        record. Les professionnels de DUBAÏ offrent le meilleur de leur 
                        créativité et vous livre au-delà de vos espérances. Nous accompagnons 
                        nos différents clients , des l'idée jusqu'à la matérialisation de leurs 
                         projets digitaux.

                        </Texte>
                    </Col>
                </Row>
            </Container>
        </WhatWeAreStc>
    )
}

export default SectionWhatWeArePageAgency;