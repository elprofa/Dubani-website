import Styled from 'styled-components';
import {Card} from 'reactstrap';

const TeamStc=Styled(Card)`
    height:300px;
    border-radius:0px;
    text-align:center;
    padding:20px;
    border:00px;
    .pictureTeam div
    {
        position:relative !important;
        height: 160px;
        width: 160px;
        margin: auto !important;
        border: 1px solid #ccc;
        background:#000;
        border-radius: 100%;
    }
`;
export default TeamStc;