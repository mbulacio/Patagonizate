import { CartWidget } from './CartWidget';

function NavBar() {
    return (
        <>
        <div className="navBarFondo">
        <div className="navBar">
            <p>PAQUETES</p>
            <p>HOTELES</p>
            <p>EXCURSIONES</p>
            <p>PROVINCIAS</p>
            <CartWidget/>
        </div>
        </div>
        </>
    )
}

export default NavBar;

