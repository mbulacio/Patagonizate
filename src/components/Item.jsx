import ItemCount from "./ItemCount";
import '../sass/App.css';

function Item({prod}) {

    const onAdd = (state) => {
        console.log(`Las personas incluidas son: ${state} en tu ${prod.title}
    Agregado al carrito`);
    }

    return (
        <div className="items" id="items">
            <img src={prod.pictureUrl} alt="paquete Neuquén" id={prod.id}/>
                <h3><strong>{prod.title}</strong></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum ea fugiat minima voluptas reprehenderit dolore ipsum esse aut.</p>
                <h4>${prod.price}</h4>
                <p>Max. por paquete: 4 personas</p>
                <p><strong>Cantidad de personas</strong></p>
                <ItemCount stock={4} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default Item
