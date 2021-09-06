function Item({prod}) {

    return (
        <div className="items" id="items">
            <img src={prod.img} alt="paquete Neuquén" id={prod.id}/>
            <h3><strong>{prod.package}</strong></h3>
            <p>{prod.descrip}</p>
            <h4>${prod.price}</h4>
            <p>Max. por paquete: {prod.cant} personas</p>
            <button className="detail">Ver detalles</button>
        </div>
    )
}

export default Item
