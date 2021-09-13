
const productos = [
    {categoria: "Paquete", id: "Paquete Neuquén", provincia: "Neuquén", package: "Neuquén", img: "https://mensajero.com.ar/wp-content/uploads/2020/02/Neuquen-759x500.jpg", price: 33293, cant: 4},
    {categoria: "Paquete", id: "Paquete Río Negro", provincia: "Río Negro", package: "Río Negro", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hotel_Llao_Llao%2C_Bariloche.jpg/1200px-Hotel_Llao_Llao%2C_Bariloche.jpg", price: 35443, cant: 4},
    {categoria: "Paquete", id: "Paquete Chubut", provincia: "Chubut", package: "Chubut",  img: "https://www.pipol.news/content/images/2019/12/chubut3-1038x604.jpg", price: 34234, cant: 4},
    {categoria: "Paquete", id: "Paquete Santa Cruz", provincia: "Santa Cruz", package: "Santa Cruz",  img: "https://lateclapat-repos-dgf.aplinews.com/archivos/noticias/fotografias/54448_3.jpg", price: 23314, cant: 4},
    {categoria: "Paquete", id: "Paquete Tierra del Fuego", provincia: "Tierra del Fuego", package: "Tierra del Fuego", img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Les_Eclaireurs_Lighthouse.jpg", price: 43562, cant: 4},
    {categoria: "Hotel", id: "Hotel Paraiso", provincia: "Neuquén",  hotel: "Paraiso", img: "https://casinomagic.com.ar/cm/wp-content/uploads/2014/01/JCR6784.jpg", price: 33293, cant: 4},
    {categoria: "Hotel", id: "Hotel Movich", provincia: "Río Negro",  hotel: "Invernal", img: "https://www.atrapalo.pe/hoteles/picture/l/4989/0/6/192267638.jpg", price: 35443, cant: 4},
    {categoria: "Hotel", id: "Hotel Los Tulipanes", provincia: "Chubut", hotel: "Fontela", img: "http://www.disfrutaargentina.com/chubut/puerto-madryn/apart-hotel-los-tulipanes/apart-hotel-los-tulipanes.jpg", price: 34234, cant: 4},
    {categoria: "Hotel", id: "Hotel Hilton", provincia: "Santa Cruz", hotel: "Hilton", img: "https://images.trvl-media.com/hotels/24000000/23390000/23381200/23381159/53be09dd.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium", price: 23314, cant: 4},
    {categoria: "Hotel", id: "Hotel Brisas", provincia: "Tierra del Fuego",  hotel: "Brisas", img: "https://picsv3.pxsol.com/1990/P3824/photos/2590a3a9501a9f6afb905976f81a1d9768e6f8fe.jpg?ixlib=js-2.3.2&s=1753b4dfc460d4693cb544c09d7eaf8a", price: 43562, cant: 4},
    {categoria: "Tour", id: "Tour Viñedos del sur", provincia: "Neuquén", tour: "Viñedos del sur", img: "https://aws.traveler.es/prod/designs/v1/assets/940x627/145133.jpg", price: 33293, cant: 4},
    {categoria: "Tour", id: "Tour Isla Victoria", provincia: "Río Negro",  tour: "Isla Victoria", img: "https://surfacetravel.com.ar/venta-online/wp-content/uploads/2017/11/isla_victoria_4.jpg", price: 35443,  cant: 4},
    {categoria: "Tour", id: "Tour Península Valdés", provincia: "Chubut", tour: "Península Valdés", img: "https://argentinavision.com/wp-content/uploads/2021/08/peninsula-valdes-sur-avistaje-de-ballenas-excursiones-03-1.jpg", price: 34234, cant: 4},
    {categoria: "Tour", id: "Tour Glaciar Perito Moreno", provincia: "Santa Cruz", tour: "Glaciar Perito Moreno", img: "https://www.serargentino.com/public/images/2020/02/glaciar1-773x458.jpeg", price: 23314, cant: 4},
    {categoria: "Tour", id: "Tour Laguna Esmeralda", provincia: "Tierra del Fuego", tour: "Laguna Esmeralda", img: "https://trending-media.com/wp-content/uploads/2019/05/Ushuaia.jpg", price: 43562, cant: 4}];

    export const getProductos = new Promise((resuelto) => {
        setTimeout(() =>{
            resuelto(productos)
        }, 1000)
    })

