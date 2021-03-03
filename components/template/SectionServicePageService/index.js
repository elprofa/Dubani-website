import React from 'react';
import ServiceStc from './SectionServicePageService.stc';
import MoleculeService from '../../molecule/MoleculeServicePageService';
import Courbe from '../../shared/CourbeOndulaire';
import Titre from '../../shared/Titre';
import SousTitre from '../../shared/SousTitre';
import {Container,Row,Col} from 'reactstrap';



const SectionService=()=>{

    
const services=[
    {
        titre:"Direction artistique",
        picture:"/img/fpic1.svg",
        position:"left",
        description:"Nous vous assurons la conception et la réalisation artistique de votre projet "+
        "tout en travaillant ensemble pour déceler la bonne idée de votre projet.Là où la création graphique "+
        "permet de matérialiser et de visualiser des concepts, la direction artistique indique dans quelle voie "+
        "aller. C’est pour cela que cette dernière vient avant la phase de création."
    },
    {
        titre:"web design ",
        picture:"/img/fpic1.svg",
        position:"right",
        description:"Pourquoi faire appel à DUBANI AGENCE web ?"+
        "Il existe aujourd’hui des solutions de création simplifiées avec 1&1 ou Wix par exemple. "+
        "Ce principe de création peut être adapté pour les personnes ayant des facilités en informatique, "+
        "en retouche d’images et avec une bonne culture web.L'expertise de DUBANI nous laisse sans voix dans ce secteur."
    },
    {
        titre:"papeterie",
        picture:"/img/fpic1.svg",
        position:"left",
        description:"En plus de la réalisation de webdesign, nous sommes de grands amoureux du papier de qualité et des belles "+
        "polices de caractères. Nous réalisons des cartes de visites, des papiers à en-tête, des brochures, etc."
    }
    ,
    {
        titre:"letterpress",
        picture:"/img/fpic1.svg",
        position:"right",
        description:""
     }
    ,
    {
        titre:"Développement mobile",
        picture:"/img/fpic1.svg",
        position:"left",
        description:"Notre agence web conçoit de belles applications mobiles et des interfaces utilisateurs réactives. Nous développons des applications pour tout type d'activités et nous collaborons ainsi à la transformation de vos idées  en réalité. Nous utilisons les technologies digitales les plus récentes pour concevoir  vos Apps ios et Android. Applications mobiles hybrides ou natives , nous nous proposons  la technologie adaptée à vos objectifs et à votre budget. En tant qu’agence de développement d'applications mobiles de premier plan , nous prenons plaisir à mettre notre expertise et notre expérience au service de vos projets numériques. Nous sommes aussi force de proposition pour l’optimisation de vos idées et disposons de compétences très pointues pour la conception de solutions mobiles performantes."
    },
    {
        titre:"Développement front end ",
        picture:"/img/fpic1.svg",
        position:"right",
        description:""
     },
     {
         titre:"Développement back end ",
         picture:"/img/fpic1.svg",
         position:"left",
         description:""
      }
      ,
     {
         titre:"DRUPAL ",
         picture:"/img/fpic1.svg",
         position:"right",
         description:""
      }
      ,
     {
         titre:"WORDPRESS ",
         picture:"/img/fpic1.svg",
         position:"left",
         description:""
      }
      ,
     {
         titre:"NODE JS ",
         picture:"/img/fpic1.svg",
         position:"right",
         description:""
      }
      ,
      {
          titre:"MARKETING DIGITAL",
          picture:"/img/fpic1.svg",
          position:"left",
          description:""
       }
       ,
       {
           titre:"GESTION DES PROJETS",
           picture:"/img/fpic1.svg",
           position:"right",
           description:""
        }
        ,
       {
           titre:"COMMUNICATION",
           picture:"/img/fpic1.svg",
           position:"left",
           description:""
        }
        ,
       {
           titre:"REFERENCEMENT",
           picture:"/img/fpic1.svg",
           position:"right",
           description:""
        }
        ,
        {
            titre:"CONCEPTION ET STRATÉGIE  DE MARQUE",
            picture:"/img/fpic1.svg",
            position:"left",
            description:""
         }
         ,
        {
            titre:"CONTENT MARKETING",
            picture:"/img/fpic1.svg",
            position:"right",
            description:""
         }
         ,
         {
             titre:"GOOGLE ADS MARKETING",
             picture:"/img/fpic1.svg",
             position:"left",
             description:""
          }
          ,
         {
             titre:"COMMUNITY MANAGEMENT",
             picture:"/img/fpic1.svg",
             position:"right",
             description:""
          }
          ,
          {
              titre:"SOCIAL MEDIA MARKETING",
              picture:"/img/fpic1.svg",
              position:"left",
              description:""
           }
           ,
          {
              titre:"WAZE ADS",
              picture:"/img/fpic1.svg",
              position:"right",
              description:""
           }
           ,
           {
               titre:"VIDEO MARKETING",
               picture:"/img/fpic1.svg",
               position:"left",
               description:""
            }
            ,
           {
               titre:"DIGITAL STRATEGY",
               picture:"/img/fpic1.svg",
               position:"right",
               description:""
            }
            
           
    
]

    return (
        <ServiceStc>
            <Container>
                <Row>
                    <Col md={12}>
                    <Courbe couleur="#ccc" marge_bas="40px" className="CourbeAccueil" />
                        <SousTitre 
                            texte="AIRE D’EXPERTISE" 
                            marge_haut="30px" 
                            marge_bas="20px" 
                            poid_font="400"/>
                        <Titre 
                            texte="Services " 
                            poid_font="700"/>
                    </Col>
                </Row>
                {
                    services.map((service,index)=>
                        <MoleculeService 
                        key={index}
                        titre={service.titre} 
                        position={service.position}
                        picture={service.picture} 
                        description={service.description}
                        />
                    )
                }
                
            </Container>
        </ServiceStc>
    )
}
export default SectionService;