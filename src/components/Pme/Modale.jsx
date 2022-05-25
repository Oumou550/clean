import React from 'react'
import  './modale.css'
import image1 from './image1.jpg'
export default function Modale() {
  return (
    // "modal" tabindex="-1"
    <div className='modale-conteneur'>
  {/* <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div> */}
        <h1 className='titre-modale'>Details pme</h1>
        <div className="sous-modale d-inline-flex">
            <div className='modale-image'>
                <img src={image1} />
            </div>
            <div className="modale-texte">
                <h1>Sodia Plast</h1>
                <h2>Nettoyage</h2>
                <p><span>Ouvrable 7jours /7</span></p>
                <p><span>Horaire de travail:   </span>08h à 17h30</p>
                <p><span>Adresse:   </span>Belle vue, C/Dixinn</p>
                <p><span>Email:   </span>sodia@gmail.com</p>
                <button>S'abonner</button>
            </div>
        </div>

</div>
  )
}
