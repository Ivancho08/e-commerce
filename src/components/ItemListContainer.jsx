import { Container } from "react-bootstrap"

export const ItemListContainer = (props) => {

    return (
        <Container className="mt-4">
            {props.greeting}
        </Container>
    )
}