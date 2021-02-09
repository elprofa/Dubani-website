import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Courbe from '../components/shared/CourbeOndulaire';
import MonImage from '../components/shared/MonImage';
import Bouton from '../components/shared/Bouton';
import Texte from '../components/shared/Texte';
import MaLigne from '../components/shared/LineFooter';

import { BsFillAwardFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <Courbe couleur="#092baf"/>
       <Bouton  texte="Bonjour a tous" bg="#092baf" couleur="#fff" icon={ <BsFillAwardFill />} />
       <MaLigne epaisseur="5" couleur="yellow"/>
       <MonImage chemin="/img/fpic1.svg" hauteur="200" largeur="400"/>
       <Texte couleur="#ff0000" taille="20px">
         Bonjour je m'appelle wedo elprofa
       </Texte>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
