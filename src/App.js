import { BrowserRouter, Switch, Route} from 'react-router-dom';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar';
import ImagenPrincipal from './components/PaginaPrincipal/ImagenPrincipal';
import Sobre from './components/SobrePatagonia/sobre';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/cartContext';

import './sass/App.css';
import Reviews from './components/Reviews/reviews';
import Contacto from './components/Contacto/contacto';


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
              <Sobre/>
              <ItemListContainer title="PAQUETES" titleDos="HOTELES" titleTres="EXCURSIONES"/
              >
              <Reviews/>
              <Contacto/>
              </Route>
              
              <Route exact path='/categoria/:category' component={ItemListContainer}/>
              
              <Route exact path='/provincia/:prov' component={ItemListContainer}/>

              <Route exact path='/id/:item' component={ItemDetailContainer}/>

              <Route exact path='/cart' component={Cart}/>

            </Switch>
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
