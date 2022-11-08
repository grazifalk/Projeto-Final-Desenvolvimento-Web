import { Link } from "react-router-dom";
import "./styles.css";

export const Gerenciar = () => {

  return (
<div className="div-menu">
        <button className="button-gerenciar third">
            <Link className="link-button" to={'/funcionarios'} >Funcionários</Link>
            </button> 
            <button className="button-gerenciar third">
            <Link className="link-button" to={'/produto-editar'} >Produtos</Link>
            </button> 
            <button className="button-gerenciar third">
            <Link className="link-button" to={'/categorias'} >Categorias</Link>
            </button> 
            <button className="button-gerenciar third">
            <Link className="link-button" to={'/clientes'} >Clientes</Link>
            </button> 
            <button className="button-gerenciar third">
            <Link className="link-button" to={'/pedidos'} >Pedidos</Link>
            </button> 

</div>

  );
};

export default Gerenciar;