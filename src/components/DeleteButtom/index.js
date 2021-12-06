import {DeleteB} from './style'


export const ButtonD = ({ children,eliminarCarro,prod}) => {


    return (
        <DeleteB  onClick={() => eliminarCarro(prod)} >{children}</DeleteB>
    )
}
