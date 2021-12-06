import {BurbujaNumero} from './estilos'

export const Burbuja = ({ cantidad }) => {
    // let { numero } = props
    // let numero = props.numero
    return (
        <BurbujaNumero >
            {cantidad > 9 ? '9+' : cantidad}
        </BurbujaNumero>
    )   
}