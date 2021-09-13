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
            <img src="patagonizate-logo.png" alt="Patagonizate logo" id="logo" />
            <ItemList produc={productos}/>
        </>
    );
}

