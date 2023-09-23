import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({product}) => (
    <Card key={product.id} style={{ width: '18rem' }}>
    <Card.Img className="itemImg" variant="top" src={product.pictureUrl} />
    <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.categoryId}</Card.Text>
        <Card.Text>
            {product.description}
            {product.price}
            {`$${product.stock}`}
        </Card.Text>
        <ItemCount />
        <Link to={`/item/${product.id}`}>
            <Button className="buttonDetail"variant="primary">Ir al Producto</Button>
        </Link>
    </Card.Body>
    </Card>
)