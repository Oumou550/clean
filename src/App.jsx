import Filter from './components/Filter/Filter';
import Etapes from './components/Etapes/Etapes';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Communes from './components/Communes/Communes';
import Footer from './components/Footer/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Header/>
      <Filter/>
      <Info/>
      <Etapes/>
      <Communes/>
      <Footer/>
    </div>
  );
}

export default App;

