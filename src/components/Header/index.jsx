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
            <li><Link to={'/sobre'} >Sobre</Link></li>
            <li><Link to={'/contato'} >Contato</Link></li>
            <li><Link to={'/gerenciar'} >Gerenciar</Link></li>
            <li><Link to={'/carrinho'} >Carrinho</Link></li>
            <li><Link to={'/login'} >Login</Link></li>
            <li><Link to={'/sair'} >Sair</Link></li>
        </ul>
    )
}

export default Header;