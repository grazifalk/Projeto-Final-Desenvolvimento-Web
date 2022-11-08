import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import Fenix from "../../assets/icons8-fenix-48.png"


const Header = () => {

    if(useLocation().pathname == "/login"){
        return (<></>);
    }

    return (
        <div>
           
            
        <ul>
            <li><img className="logo-menu" src={Fenix} alt="logo" /></li>
            <li><Link className="active" to={'/'} >Home</Link></li>
            <li><Link to={'/produtos'} >Produtos</Link></li>
            <li><Link to={'/sobre'} >Sobre</Link></li>
            <li><Link to={'/contato'} >Contato</Link></li>
            <li><Link to={'/gerenciar'} >Gerenciar</Link></li>
            <li><Link to={'/carrinho'} >Carrinho</Link></li>
            <li><Link to={'/login'} >Login</Link></li>
            <li><Link to={'/sair'} >Sair</Link></li>
        </ul>
        </div>
    )
}

export default Header;