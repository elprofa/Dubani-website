import { TitreStc } from './Titre.stc';

const Titre = (props) => {
  const { texte, color } = props;
  
  return <TitreStc color={color}>{texte}</TitreStc>;
};

export default Titre;