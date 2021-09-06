import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProducto } from './promesas';

export function ItemDetailContainer(){
    const [producto, setProducto] = useState({})
    

    useEffect(() => {
        getProducto
        .then(respu => {
            setProducto(respu)
        })
    }, [])

    return(
        <div className="itemDetailContainer">
            <ItemDetail producto={producto}/>
        </div>
    );
}