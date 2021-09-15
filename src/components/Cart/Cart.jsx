import { useCartContext } from "../../Context/cartContext"

function Cart(){

    const {borrarListado, agregar, borrarItem} = useCartContext()

    return(
        <>
            {agregar.map((items) => 
            <div className="ordenarCart"> 
                <div className="cartDetail" key={items.id}>
                    <div>
                        <p><em>Buen Viaje !</em></p>
                            <hr className="hrVertical"/>
                        <h2>#{items.id}</h2>
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
                <button id="cartBorrarCarrito" onClick={borrarListado}> Vaciar Carrito</button>
            </div>
        </>
    )
}

export default Cart