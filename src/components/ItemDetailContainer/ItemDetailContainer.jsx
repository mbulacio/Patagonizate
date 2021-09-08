import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProductos } from '../promesas';
import { useParams } from 'react-router';

export function ItemDetailContainer(){
    const [producto, setProducto] = useState({})

    const { item } = useParams()

    useEffect(() => {
        if(item === undefined){
        getProductos
        .then(respu => {setProducto(respu)})
        }else{
            getProductos
            .then(respu => {setProducto(respu.find(e => item === e.id))})
        }
    }, [item])

    return(
        <div className="itemDetailContainer">
            <ItemDetail producto={producto}/>
        </div>
    );
}