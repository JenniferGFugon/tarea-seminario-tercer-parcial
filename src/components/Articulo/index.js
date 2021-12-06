import { Button } from '../Button'
import { Container, Image, ProductName, Price } from './styles'
import {themeContext} from '../../Context/themeContext';

import react,{useContext} from "react"
export const Articulo = ({prod, agregarAlCarro}) => {
    const price = useContext(themeContext)
    return (
        <Container nombre={prod.nombre}>
            <Image imagen={prod.imagen} />
            <ProductName>{prod.nombre}</ProductName>
            <p style={price.price}>${prod.precio.toLocaleString()}</p>
            <Button prod={prod} agregarAlCarro={agregarAlCarro}>Add To Cart</Button>
        </Container>
    )
}