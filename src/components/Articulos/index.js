import { Articulo } from "../Articulo";
import {Div} from './estilos'
export const Articulos = (props) => {

    const productos = props.data.articulos
    const agregarAlCarro = props.agregarAlCarro
    const eliminarCarro=props.eliminarCarro
    return (
        <Div >
            {
                productos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} eliminarCarro={eliminarCarro}  />
                )
            }
        </Div>
    )
}