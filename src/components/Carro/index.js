import { useState ,useEffect} from 'react'
import { Burbuja } from '../Burbuja'
import {CarroC,CarroContenedor,Ul,Li,ListaArticulos} from './estilos'
import {ButtonD} from '../DeleteButtom'
export const Carro = ({ cantidad, productos ,eliminarCarro}) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)
    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto
    

    
    
  

    return (
        <CarroContenedor >
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <CarroC  onClick={handleMostrarCarro} >
                Carro
            </CarroC>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ListaArticulos >
                        <Ul>
                            {
                                productos.map(x => {
                                    return (
                                        <Li>

                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><ButtonD eliminarCarro={eliminarCarro} prod={productos}   >X</ButtonD> {x.nombre}</span>
                                            {console.log(productos)}
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </Li>
                                    )
                                })
                            }
                            <Li >
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </Li>
                        </Ul>
                    </ListaArticulos>
            }
        </CarroContenedor>

    )
}