import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [agregar, setAgregar] = useState([])

    const agregarAlCarrito = (producto) => {
        if(EnCarrito(producto.id)){
            if(producto.cant === 4 || producto.cant < 5){
                producto.cant += 1
            }
        }else{
            setAgregar([...agregar, producto])
        }
    }

    const EnCarrito = (id) => {
        return agregar.find(e => e.id === id) 
    }

    const borrarListado = () => {
        setAgregar([])
    }

    const borrarItem = (itemId) => {
        const filtarCart = agregar.filter(e => e.id !== itemId)
        return setAgregar(filtarCart)
    }

    const total = () => {
        return agregar.reduce((acum, valor) => (acum + (valor.cant * valor.price)), 0)
    }

    const pedidoEnviado = () => { 
        let timerInterval
        Swal.fire({
                title: 'Enviando tu pedido',
                html: 'se enviará en <b></b>.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                        const content = Swal.getHtmlContainer()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = Swal.getTimerLeft()
                            }
                        }
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Pedido Enviado',
                    text: 'Pronto nos comunicaremos por email!',
                    showConfirmButton: false,
                    timer: 1800
                })

            });
    }

    return (
        <CartContext.Provider value={{
            agregar,
            agregarAlCarrito,
            borrarListado,
            borrarItem,
            total,
            pedidoEnviado
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
