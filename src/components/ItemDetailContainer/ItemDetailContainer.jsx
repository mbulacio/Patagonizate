import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {getFirestore} from '../../service/getFirebase';
import { useParams } from 'react-router';

export function ItemDetailContainer(){
    const [producto, setProducto] = useState({})

    const { item } = useParams()

    console.log(item);

    useEffect(() => {
        const db = getFirestore()
        db.collection('productos').doc(item).get()
        .then(resp => {
            if(resp.exists){
                setProducto({id: resp.id, ...resp.data()})
            }else{
                console.log("No existe");
            }

        } )

    }, [item])
    
    console.log(producto);

    return(
        <div className="itemDetailContainer">
            <ItemDetail producto={producto}/>
        </div>
    );
}