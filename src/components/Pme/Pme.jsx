import React from 'react'
import "./pme.css"
import PmeRamassage from './PmeRamassage'
import PmeRecyclage from './PmeRecyclage'

export default function Pme() {
  return (
    <div className="conteneur">
      <div className='barre'>
      <form className="formulaire-search form-inline d-inline-flex ">
        <select name="" id="">
          <option value="">Ramassages</option>
          <option value="">Recyclages</option>
        </select>
      <input className="input-search form-control " type="search" placeholder="Search" aria-label="Search"></input>
      <button class="button-search btn btn-outline-success" type="submit">Search</button>
    </form>
      </div>
      
        <PmeRamassage/>
        <PmeRecyclage/>
    </div>
  )
}
