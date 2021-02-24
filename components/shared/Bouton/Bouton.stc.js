import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
const BoutonStc = styled(Button)`
  border: 1px solid ${(props) => props.couleur_bordure || "transparent"};
  border-radius: 3px;
  color: ${(props) => props.couleur || "#ffffff"};
  min-width: ${(props) => props.largeur_min || "150px"} !important;
  min-height: 40px;
  position: relative;
  overflow: hidden;
  font-size: ${(props)=>props.taille || "12px"};
  margin-top:${(props)=>props.marge_haut || ""};
  width:${(props)=>props.largeur || props.largeur_min} !important;
  text-align:${(props)=>props.alignement || "center"} !important;
  margin-left:${(props)=>props.marge_gauche || "auto"} !important;
  margin-right:${(props)=>props.marge_droite || "auto"} !important;

  i, span {
    position: relative;
    z-index: 999;
    font-style: inherit;
}

  @media (min-width: 900px) {
    min-width: 80px;
    min-height: 40px;
  }

  .badge {
    background: transparent;
    font-weight: 800;
    font-size: inherit;
    color: ${(props) => props.couleur || "#ccc"};
  }
    
// For demo purposes


// Skew button
// ==========================================================================
&.skew-button {
	cursor: pointer;
    outline: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: relative;
    display: inline-block;
    padding: 0;
    background: ${(props) => props.bg || "#ccc"};
    border: none;
    text-transform: uppercase;
    -webkit-letter-spacing: 0.1em;
    -moz-letter-spacing: 0.1em;
    -ms-letter-spacing: 0.1em;
    color: ${(props) => props.couleur || "#ffffff"};
	
	// Text
	.span {
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
        padding: 0px 20px;
		z-index: 3;
	}
  
	// Border
	&:before,
	.span:before {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		
		height: 50px;
		z-index: 2;
	}
	
	.span:before {
		display: block;
		transform-origin: center center;
		z-indeX: -1;
	}
	
	// Fill
	&:after {
        transition: all 100ms ease-out;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${(props) => props.bg_after || "#ccc"};
        border: 0px solid transparent;
        z-index: 1;
	}
	
	// Hover
	&:hover {
		.span:before {
			animation: fill .5s ease-out;
			animation-fill-mode: forwards;
		}
		
		&:after {
			animation: swoosh .7s ease-in;
		}
	}
	
	// Active
	&:active {
		&:before {
			background-color: darken(#0e3876, 20%);
		}
	}
}

// Animation
// ==========================================================================
@keyframes swoosh {
	0% {
		transform-origin: left center;
	}
	
	20% {
		transform: skewX(-20deg) scaleX(1);
		transform-origin: left center;
	}
	
	21% {
		transform-origin: right center;
	}
	
	50% {
		transform: skewX(-20deg) scaleX(0);
		transform-origin: right center;
	}
}

@keyframes fill {
	0% {
		background-color: rgba(#0e3876, 0);
	}
	
	20% {
		opacity: .5;
		border-width: 15px;
		border-color: darken(#0e3876, 10%);
	}
	
	100% {
		opacity: .5;
		border-width: 1px;
		background-color: rgba(#0e3876, 0.5);
	}
}

  
`;

export default BoutonStc;
