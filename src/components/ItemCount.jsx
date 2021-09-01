import { useState } from "react";
import '../sass/App.css';

function ItemCount({stock, initial, onAdd}) {
    const [state, setstate] = useState(initial)

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
    }

    return (
        <>
                <button className="sumar" onClick={sumar}>+</button>
                <label>{state}</label>
                <button className="restar" onClick={restar}>-</button>
                <br/>
                <button className="agregarAlCarrito" onClick={infoOnAdd}><a href="#miModal">Agregar al carrito</a></button>
                {/* Modal */}
                <a href="#items">
                    <div id="miModal" className="modal">
                        <div className="modal-contenido">
                        <p>Agregado al carrito</p>
                        <img src="ok.png" alt="ok" id="imgAgregado"/>
                        </div>  
                    </div>
                </a>
        </>
    );
}

export default ItemCount
