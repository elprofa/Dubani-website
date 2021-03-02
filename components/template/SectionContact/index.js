import React from 'react';
import SectionContactStc from './SectionContact.stc';
import {Container} from 'reactstrap';

import Contact from '../../shared/FormContact';
const SectionContact=()=>{
    return(
        <SectionContactStc>
            <Container>
                <Contact />
            </Container>
        </SectionContactStc>
    )
}
export default SectionContact;