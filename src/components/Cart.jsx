import { Container, Table } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


export const Cart = () => {
    const {items} = useContext(CartContext)
    const total =() =>
        productosAgregados.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.price,
            0
        )
    return (
        <Container>
            <h1>Cart</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td>{item.precio}</td>
                            <td>{item.cuantity}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>{total()}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </Table>
        </Container>
    )
}