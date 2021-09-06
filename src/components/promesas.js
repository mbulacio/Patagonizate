const productos = [{
    id: "Neuquén", package: "Paquete Neuquén", hotel: "Paraiso", tour: "Viñedos del sur", img: "neuquen.jpg", price: 33293, cant: 4, descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum ea fugiat minima voluptas reprehenderit dolore ipsum esse aut."},
    {id: "Río Negro", package: "Paquete Río Negro", hotel: "Invernal", tour: "Isla Victoria", img: "rio-negro.jpg", price: 35443, cant: 4, descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum ea fugiat minima voluptas reprehenderit dolore ipsum esse aut."},
    {id: "Chubut", package: "Paquete Chubut", hotel: "Fontela", tour: "Península Valdés", img: "chubut.jpg", price: 34234, cant: 4, descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum ea fugiat minima voluptas reprehenderit dolore ipsum esse aut."},
    {id: "Santa Cruz", package: "Paquete Santa Cruz", hotel: "Hilton", tour: "Glaciar Perito Moreno", img: "santa-cruz.jpg", price: 23314, cant: 4, descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum ea fugiat minima voluptas reprehenderit dolore ipsum esse aut."},
    {id: "Tierra del Fuego", package: "Paquete Tierra del Fuego", hotel: "Brisas", tour: "Laguna Esmeralda", img: "tierra-del-fuego.jpg", price: 43562, cant: 4, descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum ea fugiat minima voluptas reprehenderit dolore ipsum esse aut."}]

    export const getProductos = new Promise((resuelto) => {
        setTimeout(() =>{
            resuelto(productos)
        }, 2000)
    })

    export const getProducto = new Promise((resuelto) => {
        setTimeout(() =>{
            resuelto(productos[0])
        }, 2000)
    })
