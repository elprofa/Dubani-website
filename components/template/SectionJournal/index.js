import MoleculeRight from '../../molecule/MoleculeRightSectionAccueil';
import {Row,Col} from "react-bootstrap";
import SectionJournalStc from './SectionJournal.stc';
import MoleculeBottom from '../../molecule/MoleculeBottomSectionAccueil';
import SectionJournalMoleculeLeft from '../../molecule/MoleculeLeftHeaderJounal';
import SectionJournalMoleculeRight from '../../molecule/MoleculeRightHeaderJournal';

const SectionJournal = (props) => {
  return (
   
        <SectionJournalStc>
           <Row>
            <Col lg={6}>
                    <SectionJournalMoleculeLeft/>
                </Col>
                <Col lg={6}>
                    <SectionJournalMoleculeRight/>
                </Col>
           </Row>
            
        </SectionJournalStc>    
  );
}

export default SectionJournal; 