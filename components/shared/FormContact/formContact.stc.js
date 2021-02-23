import styled from "styled-components";
import { Container } from "reactstrap";

 const FormContactStc = styled(Container)`

    margin:30px 0px;  
    button
    {
        display:block;
        margin:20px auto;
    }
    label
    {
        position:relative;
    }
    textarea
    {
        min-height:50px;
        background: none
    }  
    h1
    {
        border-bottom: 0px solid #ecedee;
    }
    a
    {
        font-size:12px;
    }
    p
    {
        margin-top:40px;
    }
    #left
    {
        text-align:left;
    }
    #right
    {
        text-align:right;
    }

    .card 
    {
        border:0px;
        //width: 40%;
    }

    .card-gauche {
        width: 40%;
    }

    .card-droit {
        width: 40%;
    }

    .gauche {
        width:60%;
        height:100%;
        float: left;
    }

    .droit {
        width:90%;
        height:100%;
        float: right;
        background: #E0E0E3;
    }
`;

export default FormContactStc;