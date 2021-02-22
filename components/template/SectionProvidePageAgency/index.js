import React from 'react';
import SectionProvideHead from '../../molecule/SectionProvideHeadPageAgency';
import SectionProvideBody from '../../molecule/SectionProvideBodyPageAgency';
import SectionProvideStc from './SectionProvidePageAgency.stc';
import {Container} from 'reactstrap';

const SectionProvide=()=>{
    return(
        <SectionProvideStc>
            <Container>
                <SectionProvideHead />
                <SectionProvideBody />
            </Container>
        </SectionProvideStc>
    )
}

export default SectionProvide;