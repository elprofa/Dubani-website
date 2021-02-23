import Head from 'next/head'
import SectionJournal from '../components/template/SectionJournalPageJournal';

export default function Journal() {
  return (
    <div className="App">
      <Head>
        <title>Dubani | Journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <SectionJournal />
      </main>

    </div>
  )
}
