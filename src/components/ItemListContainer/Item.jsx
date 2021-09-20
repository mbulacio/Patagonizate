import { Link } from 'react-router-dom';

function Item({prod}) {

    return (
        <>
        <div className="items" id="items">
            <img src={prod.img} alt={prod.title}/>
            <h3><em>{prod.title}</em></h3>
            <p className="itemDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos nesciunt saepe? Fugit maiores ea expedita. Lorem, ipsum. Lorem ipsum dolor sit.</p>
            <h4>${prod.price}</h4>
            <p>Max. por paquete: {prod.stock} personas</p>
            <Link to={`/id/${prod.id}`}>  
            <button className="detail">Ver Detalle →</button>
            </Link>
        </div>
        </>
    )
}

export default Item
