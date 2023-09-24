import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = (props) => {
    const [product, setPrduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "ItemCollection", id)
        getDoc(refDoc).then(snapshot => {
            setPrduct({ id: snapshot.id, ...snapshot.data()})
        }).finally(() => setLoading(false))
    }, [id])
    if(loading) return <div>Cargando...</div>;
    return (
        <Container className="mt-4">
            <h1>DETALLE</h1> 
            <ItemDetail product={product} />
        </Container> 
    )
}