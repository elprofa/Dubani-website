import Head from 'next/head'
import Exo from '../components/molecule/Dubani5';


export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>dubani agency</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main">
        <Exo/>
        
      </main>

    </div>
  )
}
