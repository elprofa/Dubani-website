import React from 'react';
import TeamStc from './TeamCard.stc';
import Image from '../MonImage';
import SousTitre from '../SousTitre';
import Texte from '../Texte';
import Bouton from '../Bouton';
import { BsArrowDown } from "react-icons/bs";

const Team=(props)=>{
    return (
        <TeamStc>
            <div className="pictureTeam">
                <Image chemin={props.picture}  />
            </div>
            <SousTitre texte={props.name} marge_haut="20px"/>
            <Texte marge_haut="20px">
                {props.fonction}
            </Texte>
            <Bouton
                couleur="#333" 
                bg_after="#fff"
                bg="#ccc"
                taille="22px"
                icon={<BsArrowDown />}
            />
        </TeamStc>
    )
}

export default Team;