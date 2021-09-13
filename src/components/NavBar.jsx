import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

function NavBar() {
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
                <p>Tour</p>
                </Link>
                <Link to="/">
                <img src="patagonizate-titulo.PNG" alt="" id="patagonizateTitulo"/>
                </Link>
                <p>Sobre</p>
                <p>Reviews</p>
                <p>Contacto</p>
                <CartWidget/>
        </nav>
        </>
    )
}

export default NavBar;

