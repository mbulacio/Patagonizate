import './sass/App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {
  return (
    <>
      <header>
      <img src="patagonizate-titulo.PNG" alt="" id="patagonizateTitulo"/>
      <NavBar/>
      <ItemListContainer title="PAQUETES" titleDos="HOTELES" titleTres="EXCURSIONES"/>
      <ItemDetailContainer/>
      </header>
    </>
  );
}

export default App;
