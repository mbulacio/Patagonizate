import { Link } from 'react-router-dom';

function Item({prod}) {

    return (
        <>
        <div className="items" id="items">
            <img src={prod.img} alt={prod.title}/>
            <h3><strong>{prod.title}</strong></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos nesciunt saepe? Fugit maiores ea expedita officia, natus veniam, excepturi ex optio.</p>
            <h4>${prod.price}</h4>
            <p>Max. por paquete: {prod.stock} personas</p>
            <Link to={`/id/${prod.id}`}>  
            <button className="detail">Ver Detalle</button>
            </Link>
        </div>
        </>
    )
}

export default Item
