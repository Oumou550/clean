import React from 'react'
import './inscription.css'

export default function Inscription() {
  return (
    <div className='formulaire'>
     {/* <form action="" method="post" className=" offset-4 col-4" >

            <div className="form-group">
                <label for="first_name">Nom</label>
                <input type="text" className="form-control" id="first_name" name="nom" placeholder="Entrer votre nom" />
            </div>
            <div className="form-group">
                <label for="last_name">Prenom</label>
                <input type="text" className="form-control" id="last_name" name="prenom" placeholder="Entrer votre prenom"/>
            </div>      
            <div className="form-group">
                <label for="mail">Email Address</label>
                <input type="email" className="form-control" id="mail" name="email" placeholder="ordure@gmail.com"/>
            </div>
            <div className="form-group">
                <label for="motdepasse">Password</label>
                <input type="password" className="form-control" id="motdepasse" name="password" placeholder="Entrer votre mot de passe"/>
            </div>
            <div className="form-group">
                <label for="confirm">Confirmation</label>
                <input type="password" className="form-control" id="confirm" name="confirm" placeholder="Confirmer votre mot de passe"/>
            </div>
            <button type="submit" className="btn btn-primary">S'inscrire</button>
        </form> */}
        <form>
            <h1 className='titre-inscription'>Créer Votre Compte</h1>
    <div className="form-group mb-3">
     <label for="first_name">Nom</label>
     <input type="text" className="form-control" id="first_name" name="nom" />
  </div> 
 <div className="form-group mb-3">
    <label for="last_name">Prenom</label>
    <input type="text" className="form-control" id="last_name" name="prenom" />
</div>      
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" className="form-text text-secondary">Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre...</small>
  </div>
  <div class="form-group mb-3">
    <label for="exampleInputPassword1">Mot de passe </label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="form-group mb-3">
    <label for="confirm">Confirmation</label>
    <input type="password" className="form-control" id="confirm" name="confirm" />
</div>
  <button type="submit" className="button-inscription btn btn-dark mb-4">S'inscrire</button>
  <h4 className='titre2-inscription '>Vous avez un compte</h4>
  <button type="submit" className="button2-inscription btn">Connectez-vous</button>
</form>
    </div>
  )
}
