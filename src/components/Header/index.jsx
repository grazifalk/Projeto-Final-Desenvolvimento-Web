import "./styles.css";
import { useLocation } from "react-router-dom";
import Fenix from "../../assets/icons8-fenix-48.png"
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { NavLink } from "./styles";

const Header = () => {
    const { productsCart } = useContext(CartContext);

    // if(useLocation().pathname == "/login"){
    //     return (<></>);
    // }

    return (
        <div>
           
            
        <ul>
            <li><img className="logo-menu" src={Fenix} alt="logo" /></li>
            <li><NavLink className="active" to={'/'} >Home</NavLink></li>
            <li><NavLink to={'/produtos'} >Produtos</NavLink></li>
            <li><NavLink to={'/sobre'} >Sobre</NavLink></li>
            <li><NavLink to={'/contato'} >Contato</NavLink></li>
            <li><NavLink to={'/gerenciar'} >Gerenciar</NavLink></li>
            <li><NavLink to={'/login'} >Login</NavLink></li>
            <li><NavLink to={'/carrinho'} >Carrinho ({productsCart.length})</NavLink></li>
        </ul>
        </div>
    )
}

export default Header;