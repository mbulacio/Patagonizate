
const productos = [
    {categoria: "Paquete", id: "Paquete Neuquén", provincia: "Neuquén", package: "Neuquén", img: "neuquen.jpg", price: 33293, cant: 4},
    {categoria: "Hotel", id: "Hotel Paraiso", provincia: "Neuquén",  hotel: "Paraiso", img: "hotel-neuquen.jpg", price: 33293, cant: 4},
    {categoria: "Tour", id: "Tour Viñedos del sur", provincia: "Neuquén", tour: "Viñedos del sur", img: "viñedos-del-sur-neuquen.jpg", price: 33293, cant: 4},
    {categoria: "Paquete", id: "Paquete Río Negro", provincia: "Río Negro", package: "Río Negro", img: "rio-negro.jpg", price: 35443, cant: 4},
    {categoria: "Hotel", id: "Hotel Invernal", provincia: "Río Negro",  hotel: "Invernal", img: "hotel-rio-negro.jpg", price: 35443, cant: 4},
    {categoria: "Tour", id: "Tour Isla Victoria", provincia: "Río Negro",  tour: "Isla Victoria", img: "isla-victoria-rio-negro.png", price: 35443,  cant: 4},
    {categoria: "Paquete", id: "Paquete Chubut", provincia: "Chubut", package: "Chubut",  img: "chubut.jpg", price: 34234, cant: 4},
    {categoria: "Hotel", id: "Hotel Fontela", provincia: "Chubut", hotel: "Fontela", img: "hotel-chubut.jpg", price: 34234, cant: 4},
    {categoria: "Tour", id: "Tour Península Valdés", provincia: "Chubut", tour: "Península Valdés", img: "peninsula-valdes-chubut.jpg", price: 34234, cant: 4},
    {categoria: "Paquete", id: "Paquete Santa Cruz", provincia: "Santa Cruz", package: "Santa Cruz",  img: "santa-cruz.jpg", price: 23314, cant: 4},
    {categoria: "Hotel", id: "Hotel Hilton", provincia: "Santa Cruz", hotel: "Hilton", img: "hotel-santa-cruz.jpg", price: 23314, cant: 4},
    {categoria: "Tour", id: "Tour Glaciar Perito Moreno", provincia: "Santa Cruz", tour: "Glaciar Perito Moreno", img: "glaciar-perito-moreno-santa-cruz.jpg", price: 23314, cant: 4},
    {categoria: "Paquete", id: "Paquete Tierra del Fuego", provincia: "Tierra del Fuego", package: "Tierra del Fuego", img: "tierra-del-fuego.jpg", price: 43562, cant: 4},
    {categoria: "Hotel", id: "Hotel Brisas", provincia: "Tierra del Fuego",  hotel: "Brisas", img: "hotel-tierra-del-fuego.jpg", price: 43562, cant: 4},
    {categoria: "Tour", id: "Tour Laguna Esmeralda", provincia: "Tierra del Fuego", tour: "Laguna Esmeralda", img: "laguna-esmeralda-tierra-del-fuego.jpg", price: 43562, cant: 4}];

    export const getProductos = new Promise((resuelto) => {
        setTimeout(() =>{
            resuelto(productos)
        }, 1000)
    })

