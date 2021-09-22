import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/cartContext';
import { CartWidget } from './Cart/CartWidget';

function NavBar() {
const {agregar} = useCartContext()
    return (
        <>
        <nav className="navBar">
                <Link to={"/categoria/Paquete"}>
                <p>Paquetes</p>
                </Link>
                <Link to={"/categoria/Hotel"}>
                <p>Hoteles</p>
                </Link>
                <Link to={"/categoria/Tour"}>
                <p>Tours</p>
                </Link>
                <Link to="/">
                <img src="patagonizate-titulo.PNG" alt="" id="patagonizateTitulo"/>
                </Link>
                <p>Sobre</p>
                <p>Contacto</p>
                {agregar.length === 0? <div id="sinIcon"></div> : <CartWidget/>}
        </nav>
        </>
    )
}

export default NavBar;

