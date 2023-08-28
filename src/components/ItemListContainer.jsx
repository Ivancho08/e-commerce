import { Container } from "react-bootstrap"
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "../data/products.json";


export const ItemListContainer = (props) => {

    const [products, setPrducts] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve,reject) => {
            setTimeout(() => resolve(data), 2000);
        })

        promise.then(data => setPrducts(data))
    }, [])


    return (
        <Container className="mt-4">
            {props.greeting}
            <div>
                {products.map(products => (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>
        </Container>
    )
}