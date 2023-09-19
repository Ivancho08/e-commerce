
export const ItemDetail = ({product}) => (
    <div>
        <h2>{product.title}</h2>
        <img src={product.pictureUrl} />
        <h5>{product.description}</h5>
        <h6>PRECIO AL CONTADO: ${product.price}</h6>
        <div>Stock: {product.stock}</div>
    </div>
)