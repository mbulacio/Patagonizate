import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [agregar, setAgregar] = useState([])

    const agregarAlCarrito = (producto) => {

        if(EnCarrito(producto.id)){
            if(producto.cant === 4 || producto.cant < 5){
                const sumar = producto.cant += 1
                console.log(sumar);
                console.log(agregar);
            }
        }else{
            setAgregar([...agregar, producto])
        }  
    }

    const EnCarrito = (id) => {
        return agregar.find(e => e.id === id) 
    }

    const borrarItem = (itemId) => {
        const filtarCart = agregar.filter(e => e.id !== itemId)
        return setAgregar(filtarCart)
    }

    const borrarListado = () => {
        setAgregar([])
    }

    console.log(agregar); 

    return (
        <CartContext.Provider value={{
            agregar,
            agregarAlCarrito,
            borrarListado,
            borrarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
