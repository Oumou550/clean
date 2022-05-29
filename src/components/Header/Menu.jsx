import React from 'react'
import {Link} from 'react-router-dom'
import './menu.css'
import logo_dechet3 from './logo_dechet3.jpg'

export default function Menu() {
  return (
    <div className='header-1'>
     <nav>
         <div className="menu d-inline-flex justify-content-around pt-3">
         <div className="nom">
            <ul style={{listStyle: 'none'}}>
                <li>
                     <Link to="/"><img src={logo_dechet3}/>Fenteingny</Link>
                </li>
            </ul>
        </div>
        <div className="onglet">
        <ul style={{listStyle: 'none'}} className='d-flex justify-content-end h4 '>
                
                <li>
                    <Link to="/pme">PME</Link>
                </li>

                <li>
                    <Link to="/abonnement">Abonnement</Link>
                </li>

                <li>
                    <Link to="/compte">Se connecter</Link>
                </li>
            </ul>
        </div>
             

         </div>
   
     </nav>
     </div>
  )
}
