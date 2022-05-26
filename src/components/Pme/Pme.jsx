import React from 'react'
import Menu from '../Header/Menu'

import Modale from './Modale'


import "./pme.css"

import PmeRamassage from './PmeRamassage'
import PmeRecyclage from './PmeRecyclage'


export default function Pme() {
  return (
    <div className="conteneur">
      <Menu/>
      <div className='pme-header'>
            <h1>Des pme a votre disposition pour vos services en <span>nettoyage</span> et <span>recyclage</span></h1>
            <p>Choisissez La Pme Qui Vous Convient Et Abonnez Vous</p>
      </div>
      <div className='barre'>
      <form className="formulaire-search  d-inline-flex ">
        <select  className='combo-select' name="" id="">
          <option value="">Ramassages</option>
          <option value="">Recyclages</option>
        </select>
      {/* <input className="input-search form-control " type="search" placeholder="" aria-label="Search"></input> */}
      <input className='input-tri form-control' type='search'/>
      <button class="button-search btn btn-outline-success" type="submit">Search</button>
    </form>
      </div>
       
       
        <PmeRamassage/>
        <PmeRecyclage/>

        <Modale/>
       
    </div>
  )
}
