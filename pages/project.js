import Head from 'next/head'
import SectionProjectPageProject from '../components/template/SectionProjectPageProject';

export default function Project() {
  return (
    <div className="App">
      <Head>
        <title>Dubani | Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <SectionProjectPageProject />
      </main>

    </div>
  )
}
