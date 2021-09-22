import Item from "./Item";
import {memo} from 'react';

const ItemList= memo(({produc}) =>{

    const ItemList = produc.map((items) => <Item key={items.initial} prod={items}/>)

    return(
        <div className="item">
            {ItemList}
        </div>
    )

}
, (oldProps, newProps) => oldProps.produc.length === newProps.produc.length)
export default ItemList
