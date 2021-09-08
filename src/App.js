import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

import './sass/App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
        <img src="patagonizate-titulo.PNG" alt="" id="patagonizateTitulo"/>
        </Link>
        <NavBar/>
      </header>
        <Switch>
    
          <Route exact path='/'>
          <ItemListContainer title="PAQUETES" titleDos="HOTELES" titleTres="EXCURSIONES"/>
          </Route>


          <Route exact path='/provincia' component={ItemListContainer}/>
          
          <Route exact path='/categoria/:category' component={ItemListContainer}/>

          <Route exact path='/id/:item' component={ItemDetailContainer}/>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
