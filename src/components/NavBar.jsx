import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

function NavBar() {
    return (
        <>
        <div className="navBarFondo">
        <div className="navBar">
            <Link to={"/provincia"}>
            <p>PROVINCIAS</p>
            </Link>
            <Link to={"/categoria/Paquete"}>
            <p>PAQUETES</p>
            </Link>
            <Link to={"/categoria/Hotel"}>
            <p>HOTELES</p>
            </Link>
            <Link to={"/categoria/Tour"}>
            <p>EXCURSIONES</p>
            </Link>
            <CartWidget/>
        </div>
        </div>
        </>
    )
}

export default NavBar;

