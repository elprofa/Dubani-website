import Styled from 'styled-components';
import {Row} from "reactstrap";

const MoleculeBottomSectionAccueilStc=Styled(Row)`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    padding: 15px;
    bottom: 10px;
    
    .right
    {
        text-align:right;
    }

    svg
    {
        margin-left:30px;
        cursor:pointer;
    }
`;
export default MoleculeBottomSectionAccueilStc;