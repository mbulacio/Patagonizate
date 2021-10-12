import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";

export function CartWidget(){

    const {agregar} = useCartContext()
    
    return(
        <>
            <Link to="/cart">
            <img src="https://image.flaticon.com/icons/png/512/1926/1926376.png" alt="carrito" id="cartWidgetCarrito"/>
            <button>{agregar.length}</button>
            </Link>
        </>
    );
}