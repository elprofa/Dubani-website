import React from 'react';
import SectionTeamStc from './SectionTeam.stc';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';
import {Col,Row,Container} from 'reactstrap';
import Teams from '../../shared/TeamCard';

const SectionTeam=()=>{
    const teams=[
        {picture:"/img/chat.svg",name:"Elprofa",caption:"Lead Developper"},
        {picture:"/img/chat.svg",name:"Elprofa",caption:"Lead Developper"},
        {picture:"/img/chat.svg",name:"Elprofa",caption:"Lead Developper"},
    ]

    return (
        <SectionTeamStc>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SousTitre 
                            texte="OUR TIGERS" 
                            marge_haut="30px" 
                            marge_bas="20px" 
                            poid_font="400"/>
                        <Titre 
                        texte="Teams " 
                        poid_font="700"/>
                    </Col>
                </Row>
                <Row className="divTeam">
                    {
                        teams.map((team,index)=><Col key={index} md={4}><Teams picture={team.picture} name={team.name} caption={team.caption} /></Col>)
                    }
                </Row>
            </Container>
        </SectionTeamStc>
    )
}
export default SectionTeam;