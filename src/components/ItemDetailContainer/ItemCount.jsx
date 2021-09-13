import { useState } from "react";
import { Link } from 'react-router-dom';

function ItemCount({stock, initial, onAdd}) {
    const [state, setstate] = useState(initial)
    const [cambioBoton, setCambioBoton] = useState(false)

    const sumar = () => {
        if(state < stock){ 
            setstate(state + 1);
        }
    }

    const restar = () => {
        if(state > initial){
            setstate(state - 1)
        }
    }

    const infoOnAdd = () =>{
        onAdd(state);
        setstate(initial);
        setCambioBoton(true);
    }

    return (
        <>
                <button className="sumar" onClick={sumar}>+</button>
                <label>{state}</label>
                <button className="restar" onClick={restar}>-</button>
                <br/>
                {
                    cambioBoton ? 
                    <Link to='/cart'>
                        <button className="agregarAlCarrito">Terminar mi compra</button>
                    </Link>
                    :
                        <button className="agregarAlCarrito" onClick={infoOnAdd}>Agregar al carrito</button>
                }
        </>
    );
}

export default ItemCount
