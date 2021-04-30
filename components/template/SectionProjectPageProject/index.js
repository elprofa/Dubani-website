import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import SectionStc from './SectionProjectPageProject.stc';
import ProjectCard from '../../molecule/ProjectCard';
import SousTitre from '../../shared/SousTitre';
import Titre from '../../shared/Titre';
import Courbe from '../../shared/CourbeOndulaire';

const SectionProjectPageProject=()=>{

    const projects=[
        {
            chemin:"/img/gsn1.jpg",
            posted:'dd/mm/yyyy',
            bg:"/img/technology.jpg",
            titre:"GSN AUTO",
            description:<p>
                GSN-AUTO est un garage automobile qui s'occupe de tous types de véhicules, 
                voitures, poids lourds, motos,...Aujourd'hui, GSN-AUTO est satisfait d'avoir fait 
                confiance à dubani Agency pour la conception et la réalisation de son site internet.
            </p>
        },
        {
            chemin:"/img/win.jpg",
            posted:'dd/mm/yyyy',
            bg:"/img/technology.jpg",
            titre:"WINTECH",
            description:<p>
               Wintec est une entreprise spécialisée dans la construction des
                infrastructures industrielles. Il accompagne tous les producteurs 
                du Gabon dans des projets de développement pétrolier et gazier et met en œuvre des solutions techniques innovantes pour  assurer la performance et la pérennité des outils de production des producteurs locaux.
                Fort de l'étendue de ses compétences dans les secteurs de la 
                mécanique, de la métallurgie (tuyauterie, chaudronnerie), de 
                la plomberie, de l'assemblage et du levage, wintech réalise 
                pour ses clients industriels de nouveaux travaux, réparations 
                et maintenance sur tous types d'installations.

            </p>
        },
        {
            chemin:"/img/xpatsa.jpg",
            posted:'dd/mm/yyyy',
            bg:"/img/technology.jpg",
            titre:"XPATSA",
            description:<p>
            X-PATSA est une agence de transfert d'argent disponible en Afrique du Sud, 
            au Gabon et au Maroc. Créer depuis presque 10 ans, x-patsa est l'un des premier
             à  nous avoir fait confiance. Disponible dans 3 pays d'Afrique, en partenariat avec
              l'opérateur téléphonique Airtel, x-patsa veut se positionner dans la sous région,
               dans un premier temps comme un partenaire incontournable dans son domaine.
        </p>
        }
        
        
    ]

    return (
        <SectionStc>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Courbe couleur="#686868" marge_bas="40" className="CourbeAccueil"/>
                        <SousTitre 
                                texte="NOS" 
                                marge_haut="30px" 
                                marge_bas="20px" 
                                poid_font="400"/>
                            <Titre 
                            texte="Projets " 
                            poid_font="700"/>
                    </Col>
                </Row>
                <Row className="blockProject">
                        {
                            projects.map((project,index)=><Col md={6} key={index}>
                                <ProjectCard 
                                chemin={project.chemin} 
                                posted={project.posted} 
                                bg={project.bg} 
                                titre={project.titre} 
                                description={project.description} />
                            </Col>)
                        }
                        
                </Row>
            </Container>
        </SectionStc>
    )
}
export default SectionProjectPageProject;