import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProductos } from '../promesas';
import { useParams} from 'react-router-dom';

export function ItemListContainer(gretting){
    const [productos, setProductos] = useState([])

    const { category} = useParams()

    useEffect(() => {
        if (category === undefined){
            getProductos
            .then(resp => setProductos(resp))
        }else{
            getProductos
            .then(resp => setProductos(resp.filter(r => category===r.categoria)))
        }
    }, [category])

    
    return(
        <>  
            <div id="itemListContainerContenedor"> 
                <div className="itemListContainer"> 
                    <ul>
                        <li className="grettingTitle">{gretting.title}</li>
                        {productos.map((provincia)=> <li key={provincia.package}>{provincia.package}</li>)}
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

