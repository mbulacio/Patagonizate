import { useCartContext } from "../../Context/cartContext"
import { Link } from 'react-router-dom';

function Cart(){

    const {borrarListado, agregar, borrarItem} = useCartContext()

    return(
        <>
        {agregar.length === 0? 
                <h1 id="carritoVacio">Carrito Vacio</h1>
                :
                <h1 id="carrito">Carrito</h1>}
            {agregar.map((items) => 
            <div className="ordenarCart" key={items.id}> 
                <div className="cartDetail">
                    <div>
                        <p><em>Buen Viaje !</em></p>
                            <hr className="hrVertical"/>
                        <h2>#{items.initial}</h2>
                    </div>
                        <hr/>                
                    <h3><strong>Destino: {items.title}</strong></h3>
                        <hr/>
                    <p><strong>Precio por {items.cant} personas: $ {items.price * items.cant}</strong></p>
                        <hr/>
                    <div id="cartCancelar" onClick={() => borrarItem(items.id)}>
                        <p>Cancelar Viaje</p>
                        <img src="https://cdn-icons-png.flaticon.com/128/594/594864.png" alt="cancel"  className="cartCancel"/>
                    </div>
                    <hr/>
                </div>
                <div className="cartLateralDerecho">
                    <p>{items.provincia}</p>
                        <hr/>
                    <p>{items.cant} personas</p>
                        <hr/>
                    <img src="avion.png" alt="avion" className="cartImgAvion"/>
                    <hr/>
                </div>
            </div>)}
            <div id="cartCentrar">
                {agregar.length === 0? 
                <Link to="/">
                <button id="cartIrAlInicio" onClick={borrarListado}>ir al inicio</button>
                </Link>
                :
                <button id="cartBorrarCarrito" onClick={borrarListado}> Vaciar Carrito</button>}
            </div>
        </>
    )
}

export default Cart