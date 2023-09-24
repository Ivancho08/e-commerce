import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";


export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const refCollection = id
          ? query(collection(db, "ItemCollection"), where("categoryId", "==", id))
          : collection(db, "ItemCollection")
        getDocs(refCollection).then((snapshot) => {
          if (snapshot.size === 0) setProducts([])
          else {
            setProducts(
              snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            )
          }
        })
        .finally(() => {
            setLoading(false)
        })
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