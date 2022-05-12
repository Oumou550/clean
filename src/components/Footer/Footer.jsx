import React from 'react'
import Images from './Images'
import Texte from './Texte'

export default function Footer() {
  return (
<footer>
        <div>
            <p id="p1">Adresse</p>
            <p id="p2">Retrouvez-nous</p>
            <Texte/>
            <Images/>
            <p id="numero">Tel: 624893223/621410646</p>
        </div>
    </footer>
  )
}
