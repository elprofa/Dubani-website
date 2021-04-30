import React from 'react';
import {Row,Col,Container} from "react-bootstrap";
import SectionWhatWeDoStc from './SectionWhatWeDo.stc';
import MoleculeWhatWeDo from '../../molecule/MoleculeWhatWeDo';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';
import {BsArrowRight} from "react-icons/bs";
import MonBouton from '../../shared/Bouton';
import Link from 'next/link';
import { AiFillCode } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";


const WeDo=[
    {icon:<AiFillCode />,texte:"WEB & MOBILE DEVELOPMENT"},
    {icon:<AiOutlineShareAlt />,texte:"DIGITAL MARKETING"},
    {icon:<AiOutlineGlobal />,texte:"REFERENCEMENT"}
];

const SectionWhatWeDo=()=>{

    return(
        <SectionWhatWeDoStc>
            <Container>
                <Row>
                    <Col lg={6} >
                        <Courbe couleur="#0a2db0" />
                        <SousTitre 
                            texte="CE QUE" 
                            marge_haut="30px" 
                            marge_bas="20px" 
                            couleur="#fff"
                            poid_font="400"/>
                        <Titre 
                            texte="nous offrons " 
                            couleur="#fff" 
                            marge_bas="40px"
                            poid_font="700"/>
                    </Col>
                </Row>
                <Row>
                   
                        {
                            WeDo.map((element,index)=> <Col md={4} key={index}><MoleculeWhatWeDo icon={element.icon}
                            texte={element.texte} /></Col>)
                        }
                    
                </Row>
                <Row>
                    <Col lg={12} className="bottomWatWeDo" >
                        <Link href="service">
                            <a>
                            <MonBouton 
                                bg="transparent" 
                                bg_after="transparent"
                                couleur="#000" 
                                texte="Plus de détail" 
                                taille="14px"
                                largeur="150px"
                                icon={<BsArrowRight />} />
                                </a>
                            </Link>
                    </Col>
                </Row>
            </Container>

        </SectionWhatWeDoStc>
    )
}

export default SectionWhatWeDo;
