import Styled from 'styled-components';
import { Card} from "reactstrap";

const CardClientStc=Styled(Card)`
    background:#fff;
    width:100%;
    display:${props=>props.affichage || "block"};
    margin-top:5px;
    margin-bottom:5px;
   
    min-height:150px;
    text-align:center;
    padding:20px;

    .row
    {
        margin:0px;
    }

    div
    {
        height:100%;
        margin:auto;

    }
`;
export default CardClientStc;
