import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import Filter from './components/Filter/Filter';
import Etapes from './components/Etapes/Etapes'
import Communes from './components/Communes/Communes';
import Header from './components/Header/Header';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'

// import { Carousel } from 'bootstrap';
import DashBord from './components/DashBord/DashBord';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom'
import Home from './components/Home';
import Pme from './components/Pme/Pme';
import Abonnement from './components/Abonnement/Abonnement';
import CreerUnCompte from './components/CreerUnCompte/CreerUnCompte';
import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
        <Switch>
          <Route exact path='/'  component={Home}/>
          {/* <Route path="/dashbord" component={DashBord}/> */}
          <Route path="/pme" component={Pme}/>
          <Route path="/abonnement" component={Abonnement}/>
          <Route path="/compte" component={CreerUnCompte}/>
          <Route  component={NotFound}/>
         </Switch>
      </BrowserRouter>
  );
}

export default App;

