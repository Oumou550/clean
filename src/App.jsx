import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'

// import { Carousel } from 'bootstrap';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom'
import Home from './components/Home';
import Pme from './components/Pme/Pme';
import Abonnement from './components/Abonnement/Abonnement';
import CreerUnCompte from './components/CreerUnCompte/CreerUnCompte';
import NotFound from './components/NotFound';
import Menu from './components/Header/Menu';
import Produits from './components/Pme/Produits/Produits';



function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Menu/>
        <Switch>
          <Route exact path='/'  component={Home}/>
          {/* <Route path="/dashbord" component={DashBord}/> */}
          <Route path="/articles" component={Produits}/>
          <Route path="/pme" component={Pme}/>
          <Route path="/abonnement" component={Abonnement}/>
          <Route path="/compte" component={CreerUnCompte}/>
          <Route  component={NotFound}/>
         </Switch>
         {/* <Footer/> */}
      </BrowserRouter>
  );
}

export default App;

