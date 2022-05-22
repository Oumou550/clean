import React from 'react'
import './connexion.css'
export default function Connexion() {
  return (
  <div className='Formulaire'>
        <form>
        <h1 className='titre-inscription'>Déjà inscrit</h1>
        <div class="form-group mb-3">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-secondary">Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre...</small>
     </div>
     <div class="form-group mb-3">
            <label for="exampleInputPassword1">Mot de passe </label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
     </div>
      <button type="submit" className="button-inscription btn btn-dark mb-4">Connexion</button>
      <h4 className='titre2-inscription '>Vous n'avez pas de compte</h4>
      <button type="submit" className="button2-inscription btn">Inscrivez-vous</button>
        </form>
  </div>
  )
}
