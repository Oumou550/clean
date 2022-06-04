import React from 'react'
import Info from './Info/Info';
import './../index.css'
import Footer from './Footer/Footer';
import Filter from './Filter/Filter';
import Etapes from './Etapes/Etapes'
import Communes from './Communes/Communes';
import Header from './Header/Header';

export default function Home() {
  return (
    <div className='container-principal'>
      <Header/>
      <Filter/>
      <Info/>
      <Etapes/>
      <Communes/>
      <Footer/>
    </div>
  )
}
