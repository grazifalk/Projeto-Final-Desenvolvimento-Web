import "./styles.css";
import { Link } from "react-router-dom";

export const Gerenciar = () => {

  return (
<>
        <button className="button-gerenciar">
            <Link to={'/funcionarios'} >Funcionários</Link>
            </button> 
            <button className="button-gerenciar">
            <Link to={'/produtos'} >Produtos</Link>
            </button> 
            <button className="button-gerenciar">
            <Link to={'/categorias'} >Categorias</Link>
            </button> 
            <button className="button-gerenciar">
            <Link to={'/clientes'} >Clientes</Link>
            </button> 
            <button className="button-gerenciar">
            <Link to={'/pedidos'} >Pedidos</Link>
            </button> 

</>

  );
};

export default Gerenciar;