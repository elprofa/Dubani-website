import Head from 'next/head'
import SectionContact from '../components/template/SectionContact';

export default function Contact() {
  return (
    <div className="App">
      <Head>
        <title>Dubani | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <SectionContact />
      </main>

    </div>
  )
}
