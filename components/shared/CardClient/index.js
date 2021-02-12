import React from 'react';
import CardClientStc from './CardClient.stc';
import MonImage from '../../shared/MonImage';

const CardClient=(props)=>{
    return(
        <CardClientStc affichage={props.affichage}>
            <MonImage chemin={props.chemin} largeur="100" hauteur="100"/>
        </CardClientStc>
    )
}
export default CardClient;