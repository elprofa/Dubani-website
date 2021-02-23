import Head from 'next/head'
import SectionDetailJournal from '../components/template/SectionDetailJournal';

export default function Journal() {
  return (
    <div className="App">
      <Head>
        <title>Dubani | Detail-article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <SectionDetailJournal />
      </main>

    </div>
  )
}
