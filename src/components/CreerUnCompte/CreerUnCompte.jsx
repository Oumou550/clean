import React from 'react'
import Menu from '../Header/Menu'
import Connexion from './Connexion'
import Inscription from './Inscription'

export default function CreerUnCompte() {
  return (
    <div>
          <Menu/>
          <Inscription/>
          <Connexion/>
    </div>
  )
}
