import Head from 'next/head'
import SectionAccueil from '../components/template/SectionAccueil';
import SectionProjects from '../components/template/SectionProjects';
import SectionProduction from '../components/template/SectionProduction';
import SectionClient from '../components/template/SectionClients';
import SectionTestimonial from '../components/template/SectionTestimonial';
import SectionWhatWeDo from '../components/template/SectionwhatWeDo';

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Agence de communication digitale à casablanca</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main">
        <SectionAccueil/>
        <SectionProjects/>
        <SectionWhatWeDo/>
        <SectionProduction/>
        <SectionClient/>
        <SectionTestimonial/>
      </main>

    </div>
  )
}
