import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";
import Card from 'react-bootstrap/Card';

export const ItemDetail = ({product}) => {
    const { addItem } = useContext(CartContext)
    const onAdd = (count) => addItem(product, count)
    return(
        <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img className="itemImg" variant="top" src={product.pictureUrl} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Modelo: {product.categoryId}</Card.Text>
            <Card.Text>
                Descripción: {product.description}
                {product.price}
                {`$${product.stock}`}
                <ItemCount stock={product.stock} onAdd={onAdd} />
            </Card.Text>
        </Card.Body>
        </Card>
    )
} 
