import React from 'react' 
import './Abonnement.css'
export default function Abonnement() {
  return (
    <div className='abonnement-conteneur'>
       <h1 className='abonnement-titre'> Un abonnement à la hauteur de vos moyens</h1>
    
      
      <div className='conteneur-abonnement  d-inline-flex'>
            
      
    <div className="blocs-sevice ms-5">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="abonnement-tarif display-4">Prix des services</h1>
            <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap
                example. It’s built with default Bootstrap components and utilities with little customization.</p>
        </div>
  
        <div className="blocs card-deck mb-3 text-center ">

            <div className="bloc-1 card mb-4 shadow-sm d-inline-flex ms-5">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Maison</h4>
                </div>
                <div className="card-body">
                 <h1 className="card-title pricing-card-title">35 000 FG <small className="text-muted">/ mois</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>10 users included</li>
                        <li>2 GB of storage</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary">Sign up for free</button>
                </div>
            </div>
            <div className="bloc-2 card mb-4 shadow-sm d-inline-flex ms-5">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Pro</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>20 users included</li>
                        <li>10 GB of storage</li>
                        <li>Priority email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
                </div>
            </div>
            <div className="bloc-3 card mb-4 shadow-sm d-inline-flex ms-5">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>30 users included</li>
                        <li>15 GB of storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
  )
}
