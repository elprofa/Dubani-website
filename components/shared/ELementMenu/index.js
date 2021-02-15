import React from 'react';
import Link from 'next/link'
import ElementMenuStc from './ElementMenu.stc'

const ElementMenu=(props)=>{

    return (
        <ElementMenuStc couleur={props.couleur} marge_bas={props.marge_bas} taille={props.taille}>
             <Link href={props.lien}>
                <a>{props.texte}</a>
            </Link>
        </ElementMenuStc>
    )
}

export default ElementMenu;
