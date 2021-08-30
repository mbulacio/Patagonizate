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
        <div className="item"> 
            <div className="items">
                <img src="neuquen.jpg" alt="paquete Neuquén"/>
                <h3><strong>Paquete Neuquén</strong></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum ea fugiat minima voluptas reprehenderit dolore ipsum esse aut, velit nobis, est perferendis exercitationem, eos error deleniti libero hic consequatur.</p>
                <p>Max. por paquete: 4 personas</p>
                <p><strong>Cantidad de personas</strong></p>
                <button className="sumar" onClick={sumar}>+</button>
                <label>{state}</label>
                <button className="restar" onClick={restar}>-</button>
                <br/>
                <button className="agregarAlCarrito" onClick={infoOnAdd}><strong>Agregar al carrito</strong></button>
            </div>
        </div>
        </>
    );
}

export default ItemCount
