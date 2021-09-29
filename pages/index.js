import Head from 'next/head'
import Image from 'next/image'
import Boost from '../components/Boost'
import CompA from '../components/CompA'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Input from '../components/Input'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Header/>
    <CompA/>
    <Input/>
    <Services />
    <Boost/>
    <Footer/>
    </div>
  )
}
