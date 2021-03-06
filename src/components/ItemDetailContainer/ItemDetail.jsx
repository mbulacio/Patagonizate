import { useCartContext } from "../../Context/cartContext";
import { getFirestore } from "../../service/getFirebase";
import ItemCount from "./ItemCount";

function ItemDetail({producto}) {

    const baseDeDatos = getFirestore()

    const actualizarDatos = baseDeDatos.collection('productos').doc(producto.id)

    const {agregarAlCarrito} = useCartContext()

    const onAdd = (state) => {
        if(producto.cant < 4 || producto.stock > 0){
            producto.cant = state
            agregarAlCarrito(producto, state)
            actualizarDatos.update({
                cant: state,
                stock: producto.stock - state
            });
        }
        
    }

    return (
        <>
            <div className="itemDetailImg" id="itemDetail">
                <img src={producto.img} alt={producto.title} id={producto.title}/>
            </div>
            <div className="itemDetail" id="itemDetail">
                <h3><strong>{producto.title}</strong></h3>
                <section>
                    <article>
                        <p><strong>Acerca de</strong></p>
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos nesciunt saepe. Fugit maiores ea expedita officia, natus veniam, excepturi ex optio.</p>
                        <p><strong>Incluye</strong></p>
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos nesciunt saepe. Fugit maiores ea expedita officia, natus veniam, excepturi ex optio.</p>
                        <p><strong>Información antes de ir</strong></p>
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos nesciunt saepe. Fugit maiores ea expedita officia, natus veniam, excepturi ex optio.</p>
                        <p><strong>Politica de Cancelación</strong></p>
                        <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos nesciunt saepe. Fugit maiores ea expedita officia, natus veniam, excepturi ex optio.</p>
                    </article>
                </section>
                
                {producto.stock <= 0 ? 
                <>
                <div>
                <p className="prodAgotado"><strong>SOLD OUT</strong></p>    
                </div>
                </>
                :
                <>
                <h3>${producto.price}</h3>
                <p className="descripcion">Max. por paquete: 4 personas</p>
                <ItemCount stock={4} initial={1} onAdd={onAdd}/>
                </>}
                
            </div>
        </>
    )
}

export default ItemDetail