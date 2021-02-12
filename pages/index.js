import Head from 'next/head'
import SectionAccueil from '../components/template/SectionAccueil';
import SectionProjects from '../components/template/SectionProjects';
import SectionProduction from '../components/template/SectionProduction';
import SectionClient from '../components/template/SectionClients';

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>dubani agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <SectionAccueil/>
        <SectionProjects/>
        <SectionProduction/>
        <SectionClient/>
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}
