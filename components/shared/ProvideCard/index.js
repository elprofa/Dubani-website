import React from 'react';
import ProvideCardStc from './ProvideCard.stc';
import Texte from '../Texte'

const ProvideCard=(props)=>{


    return (
        <ProvideCardStc>
            <Texte taille="22px">
                {props.texte}
            </Texte>
            <div className="overlay">
                <div className="text">
                <Texte taille="22px" marge_bas="20px" couleur="#fff">
                    {props.texte}
                </Texte>
                  <Texte  couleur="#fff" taille="14px">
                  Le lorem ipsum est, en imprimerie  
                  </Texte>
                </div>
             </div>
        </ProvideCardStc>
    )
}
export default ProvideCard;