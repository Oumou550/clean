import React from 'react'
import {Link} from 'react-router-dom'
import Menu from './Menu'




export default function Header() {
  return (
    <div>
      <Menu/>
    <header>
      
    {/* <div className="header-1"> */}
        
    {/* //  <nav>
    //      <div className="menu d-flex justify-content-around pt-3">
    //      <div className="nom "><i>FENTEINGNY</i></div>
    //          <ul style={{listStyle: 'none'}} className='d-flex justify-content-end h4 '>
    //              <li>
    //                  <Link to=""><span className="fas fa-home"></span>Services</Link>
    //              </li>
    //              <li>
    //                  <Link to="/pme">PME</Link>
    //              </li>

    //              <li>
    //                  <Link to="/abonnement">Abonnement</Link>
    //              </li>

    //              <li>
    //                  <Link to="/compte">creer un compte</Link>
    //              </li>
    //          </ul>

    //      </div>
   
     </nav> */}
    {/* </div> */}
    <div  className="cta__session">
        <div className="cta__session--button">
            <h1>La Gestion de vos déchets est notre Métier</h1>
            <Link to='/dashbord' className="abonnez-vous">Abonnez-vous à une PME</Link>
         </div>
     </div>
 </header>
 </div>
  )
}
