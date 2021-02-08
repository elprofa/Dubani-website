import { SousTitreStc } from './SousTitre.stc';

const SousTitre = (props) => {
  const { texte, color } = props;
  
  return <SousTitreStc color={color}>{texte}</SousTitreStc>;
};

export default SousTitre;