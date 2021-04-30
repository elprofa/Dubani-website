import Head from 'next/head'
import SectionAccueil from '../components/template/sectionAccueilPageAgency';
import SectionWhatWeAre from '../components/template/sectionWhatWeArePageAgency';
import SectionProvide from '../components/template/SectionProvidePageAgency';
import SectionTeam from '../components/molecule/SectionTeam';

export default function Agency() {
  return (
    <div className="App">
      <Head>
        <title> Dubani | Agency</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main">
        <SectionAccueil />
        <SectionWhatWeAre />
        <SectionProvide />
        <SectionTeam />
      </main>

    </div>
  )
}
