import React from 'react'
import Dashbord1 from './Contenu/Dashbord1'
import Dashbord2 from './Contenu/Dashbord2'
import Dashbord3 from './Contenu/Dashbord3'
import Dashbord4 from './Contenu/Dashbord4'
import FooterDash from './FooterDash/FooterDash'
import Nav1 from './Nav/Nav1'
import Nav2 from './Nav/Nav2'
import Tableau from './Tableau/Tableau'

import Titre from './Titre'

export default function DashBord() {
  return (
    <body class="sb-nav-fixed">
       <Nav1/>
        <div id="layoutSidenav">
            <Nav2/>
            <div id="layoutSidenav_content">
            <main>
            <div className="container-fluid px-4">
           
                    <div className="row g-6 mb-6">
                        <Titre/>
                        <Dashbord1/>
                        <Dashbord2/>
                        <Dashbord3/>
                        <Dashbord4/>
                    </div>
                        <Tableau/>
            </div>
            </main>
                    <FooterDash/>
            </div>
        </div>
    </body>
  )
}
