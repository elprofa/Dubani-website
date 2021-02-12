import Head from 'next/head'
import SectionAccueil from '../components/template/SectionAccueil';
import SectionProjects from '../components/template/SectionProjects';
import SectionProduction from '../components/template/SectionProduction';
import SectionClient from '../components/template/SectionClients';
import SectionTestimonial from '../components/template/SectionTestimonial';

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
        <SectionTestimonial/>
      </main>

    </div>
  )
}
