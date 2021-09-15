import { Link } from "react-router-dom";

export function CartWidget(){
    return(
        <>
            <Link to="/cart">
            <img src="https://image.flaticon.com/icons/png/512/1926/1926376.png" alt="carrito" id="cartWidgetCarrito"/>
            </Link>
        </>
    );
}