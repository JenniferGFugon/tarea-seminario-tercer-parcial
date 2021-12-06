
import {Boton} from './estilos'
export const Button = ({children, agregarAlCarro, prod}) => {
    return (
        <Boton  onClick={() => agregarAlCarro(prod)} >{children}</Boton>
    )
}
