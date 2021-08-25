import './sass/App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <>
      <header>
      <img src="patagonizate-titulo.PNG" alt="" id="patagonizateTitulo"/>
      <NavBar/>
      <ItemListContainer title="PAQUETES" titleDos="HOTELES" titleTres="EXCURSIONES"/>
      </header>
      
    </>
  );
}

export default App;
