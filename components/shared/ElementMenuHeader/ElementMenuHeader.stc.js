import Styled from 'styled-components';
import {Card} from 'react-bootstrap';

const ElementMenuHeaderStc=Styled(Card)`
    background: #333;
    text-transform: uppercase;
    border-radius: 0px;
    text-align:left;
    padding:40px;
    transform:${(props)=>props.transformation || "rotate( 0deg )"} ;
    padding: 20px;
    margin-bottom: 20px;
    @media (min-width: 996px) and (max-width:1200px)         
    {
        padding: 10px;
    }

    svg
    {
        font-size:40px;
        color:#2058c8 !important;
    } 
`;
export default ElementMenuHeaderStc;