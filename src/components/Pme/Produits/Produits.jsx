import React from 'react'
import Footer from '../../Footer/Footer'
import Articles from './Articles'
import ModaleRecy from './ModaleRecy'
import ModalVente from './ModalVente'

export default function Produits() {
  return (
    <div className='conteneur'>
        <Articles/>
        <ModaleRecy/>
        <ModalVente/>
        <Footer/>
    </div>
  )
}
