import { useCartContext } from "../../Context/cartContext"
import { Link } from 'react-router-dom';
import { useState } from "react";
import {getFirestore} from '../../service/getFirebase';
import firebase from "firebase";
import 'firebase/firestore'


const initialState= {
    nombre: '',
    email: '',
    tel: ''
}

function Cart(){

    const [formularioCompra, setFormularioCompra] = useState(initialState)

    const {borrarListado, agregar, borrarItem, total} = useCartContext()

    console.log(total);

    function cambioEnFormulario(e){
        setFormularioCompra({
            ...formularioCompra,
            [e.target.name]: e.target.value
        })
        console.log(formularioCompra);
    }

    function TerminarCompra(e){
        const pedido={
            buyer:formularioCompra,
            items: agregar,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        console.log(pedido);

        const baseDeDato = getFirestore()
        const pedidos = baseDeDato.collection('pedidos')
        pedidos.add(pedido)
        .then(e => console.log(e))
        .catch(err => console.log(err))
        .finally(()=>{
            setFormularioCompra(initialState)
            borrarListado()
        })
        
    }

    return(
        <>
        {agregar.length === 0? 
                <h1 id="carritoVacio">Carrito Vacio</h1>
                :
                <h1 id="carrito">Carrito</h1>}
                <div id="acomodarCart"> 
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
            </div>
            <div id="totalCart">
                <p>Total:</p>
                <p>${total()}</p>
            </div>
            <div>
                <form
                onSubmit={TerminarCompra}
                onChange={cambioEnFormulario}>
                    <input type="text" placeholder="Ingresa tu nombre" name="nombre" value={formularioCompra.nombre}/>
                    <input type="tel" placeholder="Ingresa tu tel" name="tel" value={formularioCompra.tel}/>
                    <input type="email" placeholder="Ingresa tu email" name="email" value={formularioCompra.email}/>
                    <button>Terminar compra</button>
                    <div id="cartCentrar">
                {agregar.length === 0? 
                <Link to="/">
                <button id="cartIrAlInicio" onClick={borrarListado}>ir al inicio</button>
                </Link>
                :
                <button id="cartBorrarCarrito" onClick={borrarListado}> Vaciar Carrito</button>}
            </div>
                </form>
            </div>
            
            
        </>   
    )
}

export default Cart
