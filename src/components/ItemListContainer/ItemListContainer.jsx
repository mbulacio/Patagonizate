import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {getProductos} from '../promesas';
import { useParams} from 'react-router-dom';
// import { getFirestore } from '../../service/getFirebase';

export function ItemListContainer(){
    const [productos, setProductos] = useState([])

    const { category } = useParams()

    useEffect(() => {

        // const baseDeDatos = getFirestore()
        // const querybaseDeDatos = baseDeDatos.collection('productos').get()
        // querybaseDeDatos.then(data => {
        //     if(data.size === 0){
        //         console.log('No hay nada')
        //     }
        //     setProductos(data.docs.map(
        //         prod => (
        //             { id: prod.id, ...prod.data()}
        //             )
        //         )
        //     )
        //     })
        if (category === undefined){
            getProductos
            .then(resp => setProductos(resp))
        }else{
            getProductos
            .then(resp => setProductos(resp.filter(r => category===r.categoria)))
        }
    }, [category])

    console.log(productos);

    return(
        <>  
            <img src="patagonizate-logo.png" alt="Patagonizate logo" id="logo" />
            <ItemList produc={productos}/>
        </>
    );
}

