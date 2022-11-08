import { useState } from "react";
import { Button } from "react-bootstrap";
import { Cadastrar } from "../../components/Controller/Cliente/Cadastrar";
import { Atualizar } from "../../components/Controller/Cliente/Atualizar";
import { Deletar } from "../../components/Controller/Cliente/Deletar";
import "./styles.css"

const Cliente = () => {
    const [form, setForm] = useState("");

    return (
        <>
        <div className="div-menu-four h1-gerenciar-cliente">
        <div>
<h1 className="h1-title">Gerenciar Clientes</h1>
</div>
<Button className="button-gerenciar-x four" onClick={() => setForm("adicionar")}>Adicionar</Button>
<Button className="button-gerenciar-x four" onClick={() => setForm("atualizar")}>Atualizar</Button>
<Button className="button-gerenciar-x four" onClick={() => setForm("deletar")}>Deletar</Button>
{form === "adicionar" && <Cadastrar />}
{form === "atualizar" && <Atualizar />}
{form === "deletar" && <Deletar />}

</div>
    </>
    )
}

export default Cliente;