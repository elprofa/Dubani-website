import { TexteStc } from './Texte.stc';

const Texte = (props) => {
  const { texte, color } = props;
  
  return <TexteStc color={color}>{texte}</TexteStc>;
};

export default Texte;