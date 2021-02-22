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
            chemin:"/img/workplace.jpg",
            posted:'05 October 2021',
            bg:"/img/technology.jpg",
            titre:"Project Name",
            description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
        },
        {
            chemin:"/img/workplace.jpg",
            posted:'05 October 2021',
            bg:"/img/technology.jpg",
            titre:"Project Name",
            description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
        },
        {
            chemin:"/img/workplace.jpg",
            posted:'05 October 2021',
            bg:"/img/technology.jpg",
            titre:"Project Name",
            description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
        }
        ,
        {
            chemin:"/img/workplace.jpg",
            posted:'05 October 2021',
            bg:"/img/technology.jpg",
            titre:"Project Name",
            description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
        }
        ,
        {
            chemin:"/img/workplace.jpg",
            posted:'05 October 2021',
            bg:"/img/technology.jpg",
            titre:"Project Name",
            description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
        }
        ,
        {
            chemin:"/img/workplace.jpg",
            posted:'05 October 2021',
            bg:"/img/technology.jpg",
            titre:"Project Name",
            description:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum"
        }
        
    ]

    return (
        <SectionStc>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Courbe couleur="#686868" marge_bas="40" className="CourbeAccueil"/>
                        <SousTitre 
                                texte="OUR" 
                                marge_haut="30px" 
                                marge_bas="20px" 
                                poid_font="400"/>
                            <Titre 
                            texte="Projects " 
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