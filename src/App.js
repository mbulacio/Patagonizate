import { BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import ImagenPrincipal from './components/ImagenPrincipal';
import CartContextProvider from './Context/cartContext';

import './sass/App.css';

function App() {

  return (
    <CartContextProvider>
        <BrowserRouter>
              <header>
                <NavBar/>
              </header>
            <Switch>
        
              <Route exact path='/'>
              <ImagenPrincipal/>
              <ItemListContainer title="PAQUETES" titleDos="HOTELES" titleTres="EXCURSIONES"/>
              </Route>
              
              <Route exact path='/categoria/:category' component={ItemListContainer}/>

              <Route exact path='/id/:item' component={ItemDetailContainer}/>

              <Route exact path='/cart' component={Cart}/>

            </Switch>
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
