import {useEffect,useState} from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../service/getFirebase';

export function ItemListContainer() {
    const [productos, setProductos] = useState([])

    const {category} = useParams()

    const {prov} = useParams()

    // por categoria

    useEffect(() => {
        const db = getFirestore()
        const queryDB = db.collection('productos')

        const conditionQuery = category ?
            queryDB.where('categoria', '==', category)
        :
            queryDB

        conditionQuery.get()
        .then(data =>{
            if(data.size===0){
                console.log('Colección vacia');
            }
            setProductos( data.docs.map(prod => ({ id: prod.data().id, ...prod.data()})))
        })
    }, [category])

    // por provincia

    useEffect(() => {
        const db = getFirestore()
        const queryDB = db.collection('productos')

        const conditionQuery = prov ?
            queryDB.where('provincia', '==', prov)
        :
            queryDB

        conditionQuery.get()
        .then(data =>{
            if(data.size===0){
                console.log('Colección vacia');
            }
            setProductos( data.docs.map(prod => ({ id: prod.data().id, ...prod.data()})))
        })
    }, [prov])
 
    return ( 
        <>
        <img src = "https://img.freepik.com/vector-gratis/ruta-ruta-linea-avion-punto-inicio-trazo-linea-trazos_166001-133.jpg?size=626&ext=jpg" alt = "Patagonizate logo" id = "logoAvion" />
        <div id="titular">
            <h1 >Tu proximo destino esta aqui</h1>
        </div>
        <ItemList produc = {productos}/> 
        </>
    );
}