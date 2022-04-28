
import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar"
import Homepage from "../components/Home"
import Skills from '../components/Skills'
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Homepage />
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
