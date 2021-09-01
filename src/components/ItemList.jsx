import '../sass/App.css';
import Item from "./Item";

const productos = [
    {id:'PqNeu', title:'Paquete Neuquén', price: 33293, pictureUrl:'neuquen.jpg'},
    {id:'PqRN', title:'Paquete Río Negro', price: 35443, pictureUrl:'rio-negro.jpg'},
    {id:'PqChu', title:'Paquete Chubut', price: 34234, pictureUrl:'chubut.jpg'},
    {id:'PqSC', title:'Paquete Santa Cruz', price: 23314, pictureUrl:'santa-cruz.jpg'},
    {id:'PqTF', title:'Paquete Tierra del Fuego', price: 43562, pictureUrl:"tierra-del-fuego.jpg"}];

let items = new Promise ((resolve, reject) =>{
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});

items
.then((respuesta) => {console.log(respuesta)})

function ItemList() {

    const prodItems = productos.map((prod) => <Item key={prod.id} prod={prod}/>);

    return (
        <div className="item">
                {prodItems}
        </div>
    )
}

export default ItemList;
