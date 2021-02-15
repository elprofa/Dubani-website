import Styled from 'styled-components';
import {Row} from "reactstrap";

const MoleculeBottomSectionAccueilStc=Styled(Row)`
    position: relative;
    left: 0;
    right: 0;
    margin: auto !important;
    padding: 15px;
    bottom: 10px;
    text-align:left;

    @media (min-width: 476px) {
        position: absolute;
    }

    .right
    {
        text-align:left;
        @media (min-width: 476px) {
            text-align:right;
        }
    }

    svg
    {
        margin-left:30px;
        cursor:pointer;
    }
`;
export default MoleculeBottomSectionAccueilStc;