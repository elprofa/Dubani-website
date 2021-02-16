import Head from 'next/head'
import MyOverlay from '../components/molecule/Overlay';


export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>dubani agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <MyOverlay/>
        
      </main>

    </div>
  )
}
