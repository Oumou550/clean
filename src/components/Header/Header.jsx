import React from 'react'

export default function Header() {
  return (
    <header>
    <div class="header-1">
     <nav>
         <div class="nom">FENTEINGNY</div>
         <div class="menu">
             <ul>
                 <li>
                     <a href="#"><span class="fas fa-home"></span>Services</a>
                     <ul class="sous-liste">
                         <li class="items-sous-liste"><a href="#">Pour maison</a></li>
                         <li class="items-sous-liste"><a href="#">Pour entreprises</a></li>
                     </ul>
                 </li>
                 <li>
                     <a href="contact.html">PME</a>
                 </li>
                 <li>
                     <a href="inscription.html">Abonnement</a>
                 </li>
                 <li>
                     <a href="propos.html"> Créer un compte</a>
                 </li>
             </ul>
         </div>
     </nav>
    </div>
    <div  class="cta__session">
        <div class="cta__session--button">
            <h1>La Gestion de vos déchets est notre Métier</h1>
            <button class="abonnez-vous">Abonnez-vous à une PME</button>
         </div>
     </div>
 </header>
  )
}
