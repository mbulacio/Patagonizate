import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProductos } from './promesas';

export function ItemListContainer(gretting){
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos
        .then(resp => {
            setProductos(resp)
        })
    }, [])

    
    return(
        <>
            <div id="itemListContainerContenedor"> 
                <div className="itemListContainer"> 
                    <ul>
                        <li className="grettingTitle">{gretting.title}</li>
                        {productos.map((provincia)=> <li key={provincia.id}>{provincia.id}</li>)}
                    </ul> 
                </div>
                <div className="itemListContainer"> 
                    <ul>
                        <li className="grettingTitle">{gretting.titleDos}</li>
                        {productos.map((hoteles)=> <li key={hoteles.hotel}>{hoteles.hotel}</li>)}
                    </ul> 
                </div>
                <div className="itemListContainer"> 
                    <ul>
                        <li className="grettingTitle">{gretting.titleTres}</li>
                        {productos.map((excursiones)=> <li key={excursiones.tour}>{excursiones.tour}</li>)}
                    </ul> 
                </div>
            </div>
            <img src="patagonizate-logo.png" alt="Patagonizate logo" id="logo" />
            <ItemList produc={productos}/>
        </>
    );
}