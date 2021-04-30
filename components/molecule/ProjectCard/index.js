import React from 'react';
import ProjectCardStc from './ProjectCard.stc';
import Image from '../../shared/MonImage';
import Texte from '../../shared/Texte';
import Bouton from '../../shared/Bouton';
import { BsArrowRight } from "react-icons/bs";

const ProjectCard=(props)=>{
    
    return (
        <ProjectCardStc>
            <Image chemin={props.chemin} />
            <div className="overlay">
                <div className="text">
                <Texte taille="24px" poid_font="600" marge_bas="20px" couleur="#fff">
                    {props.titre}
                </Texte>
                <Texte  couleur="#fff" marge_haut="0" taille="16px">
                    Posted on: {props.posted}
                </Texte>
                <Texte  couleur="#fff" marge_haut="1px" taille="14px">
                    {props.description}
                </Texte>
                {/* <Bouton texte="FULL VIEW"
                    bg="transparent"
                    bg_after="transparent"
                    marge_haut="40px" 
                    couleur="#fff" 
                    icon={<BsArrowRight />}
                /> */}
                </div>
            </div>
        </ProjectCardStc>
    )
}

export default ProjectCard;