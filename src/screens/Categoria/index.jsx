import "./styles.css"
import { useState } from "react";
import { Button } from "react-bootstrap";
import { BuscarTodos } from "../../components/Controller/Categoria/BuscarTodos";
import { Cadastrar } from "../../components/Controller/Categoria/Cadastrar";
import { Atualizar } from "../../components/Controller/Categoria/Atualizar";
import { Deletar } from "../../components/Controller/Categoria/Deletar";


const Categoria= () => {
    const [form, setForm] = useState("");

    return (
        <>
        <div className="div-menu-four h1-gerenciar-categoria">
        <div>
<h1 className="h1-title">Gerenciar Categorias</h1>
</div>
<Button className="button-gerenciar-x four" onClick={() => setForm("buscarTodos")}>BuscarTodos</Button>
<Button className="button-gerenciar-x four" onClick={() => setForm("adicionar")}>Adicionar</Button>
<Button className="button-gerenciar-x four" onClick={() => setForm("atualizar")}>Atualizar</Button>
<Button className="button-gerenciar-x four" onClick={() => setForm("deletar")}>Deletar</Button>

{form === "buscarTodos" && <BuscarTodos />}
{form === "adicionar" && <Cadastrar />}
{form === "atualizar" && <Atualizar />}
{form === "deletar" && <Deletar />}
</div>
       </>
    )
}

export default Categoria;