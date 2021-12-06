import { Carro } from '../Carro'
import {Nav} from './estilos'

export const Navbar = ({ cantidad, productos ,eliminarCarro}) => {

    return (
        
        <Nav>
            <p>Logo</p>
            <Carro cantidad = {cantidad} productos={productos} eliminarCarro={eliminarCarro} />
        </Nav>
    )
}