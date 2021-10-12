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
                <p>Excursiones</p>
                </Link>
                <Link to="/">
                <img src="patagonizate-titulo.PNG" alt="PATAGONIZATE" id="patagonizateTitulo"/>
                </Link>
                <a href="#info">
                    <p>Sobre</p>
                </a>
                <a href="#reviewsTitulo">
                    <p>Reviews</p>
                </a>
                <a href="#contacto">
                <p>Contacto</p>
                </a>
                {agregar.length === 0? <div id="sinIcon"></div> : <CartWidget/>}
        </nav>
        </>
    )
}

export default NavBar;

