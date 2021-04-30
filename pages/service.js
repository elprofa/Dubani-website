import Head from 'next/head'
import SectionService from '../components/template/SectionServicePageService';

export default function Service() {
  return (
    <div className="App">
      <Head>
        <title>Dubani | Service</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main">
        <SectionService />
      </main>

    </div>
  )
}
