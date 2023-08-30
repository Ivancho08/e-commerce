import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = (props) => {

    const [product, setPrduct] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((resolve,reject) => {
            setTimeout(() => {
                const productById = data.find((product) => product.id === id);
                resolve(productById); 
            }, 2000);
            
        })
        promise.then((data) => setPrduct(data))
    }, []);

    if(!product) return <div>Cargando...</div>;


    return (
        <Container className="mt-4">
            <h1>DETALLE</h1> 
            <ItemDetail product={product} />
        </Container>
    )
}