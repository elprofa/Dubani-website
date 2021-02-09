import React from 'react';
import Link from 'next/link'
import ElementMenuStc from './ElementMenu.stc'

const ElementMenu=(props)=>{

    return (
        <ElementMenuStc>
             <Link href={props.lien}>
                <a>{props.texte}</a>
            </Link>
        </ElementMenuStc>
    )
}

export default ElementMenu;
