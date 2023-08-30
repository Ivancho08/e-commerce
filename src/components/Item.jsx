import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({product}) => (
    <Card key={product.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.pictureUrl} />
    <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
            {product.description}
            {product.price}
        </Card.Text>
        <Link to={`/item/${product.id}`}>
            <Button variant="primary">Go somewhere</Button>
        </Link>
    </Card.Body>
    </Card>
)