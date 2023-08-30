

export const ItemDetail = ({product}) => (
    <div>
        <h1>{product.title}</h1>
        <img src={product.pictureUrl} />
        <div>{product.stock}</div>
    </div>
)