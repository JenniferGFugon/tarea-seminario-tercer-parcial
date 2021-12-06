import react ,{Fragment,useContext,useEffect,useRef,useState} from 'react';
import {themeContext} from "../Context/themeContext";
import { Articulos } from "./Articulos"
import { Navbar } from './Navbar'

const  Contenedor = () => {

    const informacion = {
        articulos: [
          {id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg'},
          {id: 2, nombre: 'iMac', precio: 1200, imagen: '/images/imac.jpeg'},
          {id: 3, nombre: 'iPad Mini', precio: 400, imagen: '/images/ipad-mini.jpg'},
          {id: 4, nombre: 'iPhone 13 Pro', precio: 1100, imagen: '/images/iphone13-pro.jpg'},
          {id: 5, nombre: 'Macbook Pro', precio: 1600, imagen: '/images/macbook-pro.png'}
        ],
        carrito: [
          //{id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg', cantidad: 2},
        ]
      }
    const theme =useContext(themeContext)
    const [data, setData] = useState(informacion)   
    const cantidad = useRef(0)
    useEffect(()=>{
        cantidad.current = cantidad.current +1
      },[data])
    
      const agregarAlCarro = (producto) => {
        // 1- Verificar si el producto clickeado ya està en el carrito
        if (data.carrito.find(x => x.id === producto.id)) {
          // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
          const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad +1}) : x)
          //cantidad.current = cantidad.current +1
          data.carrito = carritoCopia
          setData({...data})
          return
        }
    
        data.carrito.push({...producto, cantidad:  1})
        setData({...data})
      }
      const eliminarCarro = (producto) => {
        if (data.carrito.find(x => x.id === producto.id)) 
            {
                data.carrito.splice(producto.id, 1)
            }
      }
  
      
    return (
        < div style={theme.dark} >
            <Navbar cantidad={cantidad.current} productos={data.carrito} eliminarCarro={eliminarCarro} />
            <Articulos  agregarAlCarro={agregarAlCarro} data={data}  />
        </div>
    )
}

export default Contenedor;