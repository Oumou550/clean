import React from 'react'
import  './modale.css'
import image1 from './image1.jpg'
export default function Modale() {
  return (
    // "modal" tabindex="-1"
    <div className='modale-conteneur'>
  
        <h1 className='titre-modale'>Details pme</h1>
        <div className="sous-modale d-inline-flex">
            <div className='modale-image'>
                <img src={image1} />
            </div>
            <div className="modale-texte">
                <h1>Sodia Plast</h1>
                <h2>Nettoyage</h2>
                <p><span>Ouvrable 7jours / 7</span></p>
                <p><span>Horaire de travail:   </span>08h à 17h30</p>
                <p><span>Adresse:   </span>Belle vue, C/Dixinn</p>
                <p><span>Email:   </span>sodia@gmail.com</p>
                <button>S'abonner</button>
            </div>
        </div>

</div>
  )
}
