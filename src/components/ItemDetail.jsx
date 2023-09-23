import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({product}) => {
    const { addItem } = useContext(CartContext)
    const onAdd = (count) => addItem(product, count)
    return(
        <div style={{ display: "flex", flexWrap: "wrap"}}>
            <h2>{product.title}</h2>
            <img src={product.pictureUrl} />
            <h5>{product.description}</h5>
            <h6>PRECIO AL CONTADO: ${product.price}</h6>
            <div>Stock: {product.stock}</div>
            <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
    )
} 
