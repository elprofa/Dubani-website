import Styled from 'styled-components';

const ElementMenuStc=Styled.li `
    font-size:${(props)=>props.taille || "inherite"};
    color:${(props)=>props.couleur || "inherit"};
    list-style:none;
    margin-bottom:${(props)=>props.marge_bas || "inherit"};
    text-transform:uppercase;

    a
    {
        color:${(props)=>props.couleur || "inherit"};
        text-decoration:none;
    }

`;
export default ElementMenuStc;
