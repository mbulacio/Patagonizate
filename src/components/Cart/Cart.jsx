import {useCartContext} from '../../Context/cartContext';
import { Link } from 'react-router-dom';
import { useState } from "react";
import {getFirestore} from '../../service/getFirebase';
import firebase from "firebase";
import 'firebase/firestore';


const initialState= {
    nombre: '',
    email: '',
    tel: ''
}

function Cart(){

    const [formularioCompra, setFormularioCompra] = useState(initialState)

    const {borrarListado, agregar, borrarItem, total, pedidoEnviado} = useCartContext()

    function cambioEnFormulario(e){
            setFormularioCompra({
                ...formularioCompra,
                [e.target.name]: e.target.value
            })

    }

    function TerminarCompra(e){
        e.preventDefault()

        const pedido={
            buyer:formularioCompra,
            total: total(),
            items: agregar,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const baseDeDato = getFirestore()
        const pedidos = baseDeDato.collection('pedidos')
        pedidos.add(pedido)
        .then(e => console.log(e))
        .catch(err => console.log(err))
        .finally(()=>{
            setFormularioCompra(initialState)
            pedidoEnviado()
            borrarListado()
        })
        
    }

    return(
        <>
                {agregar.length === 0?
                <>
                <h1 id="carritoVacio">Carrito Vacio</h1>
                <Link to="/">
                <div className="cartCentrar">
                    <button id="cartIrAlInicio" onClick={borrarListado}>ir al inicio</button>
                </div>
                </Link>
                </>
                :
                <> 
                <h1 id="carrito">Carrito</h1>
                {agregar.map((items) => 
                <div className="ordenarCart" key={items.id}> 
                    <div className="cartDetail">
                        <div>
                            <p><em>Buen Viaje !</em></p>
                                <hr className="hrVertical"/>
                            <h2>#{items.initial}</h2>
                        </div>
                            <hr/>
                            <div id="destino">
                                <p><strong>Destino: {items.title}</strong></p>
                            </div>      
                            <hr/>
                            <div id="precio">
                            <p><strong>Precio por {items.cant} personas: $ {items.price * items.cant}</strong></p>
                            </div>
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
                <div id="totalCart">
                        <p>Total:</p>
                        <p>${total()}</p>
                    </div>
                    <div id="form">
                <form
                    onSubmit={TerminarCompra}
                    onChange={cambioEnFormulario}>
                        <h1>Datos para compra</h1>
                        <input type="text" placeholder="Ingresa tu nombre" name="nombre" defaultValue={formularioCompra.nombre}/>
                        <input type="text" placeholder="Ingresa tu tel" name="tel" defaultValue={formularioCompra.tel}/>
                        <input type="email" placeholder="Ingresa tu email" name="email" defaultValue={formularioCompra.email}/>
                        <input type="email" placeholder="Confirme el email" name="email"/>
                        <button>Terminar compra</button>
                </form>
            </div>
            <div className="cartCentrar">
                    <button id="cartBorrarCarrito" onClick={borrarListado}> Vaciar Carrito</button>
            </div>
            </>}
        </>   
    )
}

export default Cart
