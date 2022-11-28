import type { NextPage } from 'next' 
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title >الصفحة الرئيسية</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <nav>
         <NavBar/>
        </nav>
    </div>
  )
}

export default Home
