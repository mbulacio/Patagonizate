import Item from "./Item";

function ItemList({produc}){

    const ItemList = produc.map((items) => <Item key={items.id} prod={items}/>)

    return(
        <div className="item">
            {ItemList}
        </div>
    )

}
export default ItemList
