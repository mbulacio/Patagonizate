import ItemCount from "./ItemCount";

function ItemDetail({producto}) {

    const onAdd = (state) => {
        console.log(`Las personas incluidas son: ${state} en tu ${producto.id}
    Agregado al carrito`);
    }


    return (
            <div className="itemDetail" id="itemDetail">
                <img src={producto.img} alt="paquete Neuquén" id={producto.id}/>
                <h3><strong>{producto.package}</strong></h3>
                <p className="descripcion">{producto.descrip}</p>
                <h4>${producto.price}</h4>
                <p className="descripcion">Max. por paquete: {producto.cant} personas</p>
                <ItemCount stock={4} initial={1} onAdd={onAdd}/>
            </div>
    )
}

export default ItemDetail