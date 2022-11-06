import "./styles.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    if(useLocation().pathname == "/login"){
        return (<></>);
    }

    return (
        <ul>
            <li><Link className="active" to={'/'} >Home</Link></li>
            <li><Link to={'/produtos'} >Produtos</Link></li>
            <li><Link to={'/pedido'} >Pedido</Link></li>
            <li><Link to={'/clientes'}>Clientes</Link></li>
            <li><Link to={'/funcionarios'} >Funcionarios</Link></li>
            <li><Link to={'/gerenciar'} >Gerenciar</Link></li>
        </ul>
    )
}

export default Header;