import React, { useState } from "react";
import SectionAccueilMoleculeLeftStc from './MoleculeLeftSectionAccueil.stc';
import Bouton from '../../shared/Bouton';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';
import { Modal,Button } from "react-bootstrap";
import FormSendProject from "../FormSendProject";

const SectionAccueilMoleculeLeft=(props)=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <SectionAccueilMoleculeLeftStc ref={props.reference}>
            <Courbe couleur="#0a2db0" marge_bas="40px" className="CourbeAccueil" />
            <SousTitre 
                texte="FAITES GRANDIR VOTRE VISIBILITÉ ET VOTRE NOTORIÉTÉ " 
                marge_haut="30px" 
                marge_bas="20px" 
                poid_font="400"/>
            <Titre 
                texte="Avec une  agence digitale experte dans la création des contenus digitaux. " 
                poid_font="700"/>
            
            <Bouton 
                texte="EMBAUCHEZ NOUS" 
                bg="#ccc" 
                bg_after="#0a2db0"
                couleur="#fff" clicker={handleShow} />

                <Modal 
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                >
                    <Modal.Header closeButton className="wedo">
                    <Modal.Title>Informations sur le projet</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormSendProject />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" style={{"backgroundColor":"#ccc","border":"0px","color":"#000"}} onClick={handleClose}>
                        Quitter
                    </Button>
                    </Modal.Footer>
                </Modal>

        </SectionAccueilMoleculeLeftStc>
    )
}

export default SectionAccueilMoleculeLeft;