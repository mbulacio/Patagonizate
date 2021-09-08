import ItemCount from "./ItemCount";

function ItemDetail({producto}) {

    const onAdd = (state) => {
        console.log(`Las personas incluidas son: ${state} en tu ${producto.id}
    Agregado al carrito`);
    }

    return (
        <>
            <div className="itemDetailImg" id="itemDetail">
                <img src={producto.img} alt="paquete Neuquén" id={producto.id}/>
            </div>
            <div className="itemDetail" id="itemDetail">
                <h3><strong>{producto.id}</strong></h3>
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
                <h3>${producto.price}</h3>
                <p className="descripcion">Max. por paquete: {producto.cant} personas</p>
                <ItemCount stock={4} initial={1} onAdd={onAdd}/>
            </div>
        </>
    )
}

export default ItemDetail