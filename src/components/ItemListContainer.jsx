import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import data from "../data/products.json";


export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        if (!loading) setLoading(true)
        const promise = new Promise((resolve,reject) => {
            setTimeout(() => resolve(data), 2000);
        });
        promise.then((data) => {
            if(!id){
                setProducts(data);
            } else {
               const productsFiltered = data.filter(product => product.categoryId === id); 
               setProducts(productsFiltered);
            }
            setLoading(false);
        });
    }, [id]);
    if(loading) return <div>Cargando...</div>
    return (
        <Container className="mt-4">
            {props.greeting}
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <ItemList products={products}/>
            </div>
        </Container>
    )
}