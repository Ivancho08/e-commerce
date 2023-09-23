import { Container, Table } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Form from "react-bootstrap/Form"
import { getFirestore, collection, addDoc } from "firebase/firestore";


export const Cart = () => {
    const [formValues, setFormValues] = useState ({
        name: "",
        phone: "",
        email: "",
    })
    const { clear, items, removeItem} = useContext(CartContext)
    const total =() =>
        items.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.precio,
            0
        )
    const handleChange = ev => {
        setFormValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }
    const sendOrder = () => {
        const order = {
            buyer: formValues,
            items,
            total: total(),
        }
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc( orderCollection, order).then(({id}) => {
            if (id) {
                setFormValues({
                    name: "",
                    phone: "",
                    email: "",
                })
                clear()
                alert("Su orden: " + id + " ha sido completada!")
            }
        })
    }
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
                            <td>
                                <button onClick={() => removeItem(item.id)}>
                                    Eliminar
                                </button>
                            </td>
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
            <h2>Ingresar datos de Usuario</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        onChange={handleChange} 
                        value={formValues.name}
                        type="text"
                        name="name"
                        required 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        onChange={handleChange} 
                        value={formValues.email}
                        type="email"
                        name="email"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control 
                        onChange={handleChange} 
                        value={formValues.phone}
                        type="text"
                        name="phone"
                        required
                    />
                </Form.Group>
            </Form>
            <button onClick={sendOrder}>Comprar</button>
        </Container>
    )
}