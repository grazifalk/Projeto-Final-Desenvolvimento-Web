import "./styles.css"
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Cadastrar } from "../../components/Controller/Cliente/Cadastrar";
import { Atualizar } from "../../components/Controller/Cliente/Atualizar";
import { Deletar } from "../../components/Controller/Cliente/Deletar";

const Cliente = () => {
    const [form, setForm] = useState("");

    return (
        <div>
<h1>Gerenciar Clientes</h1>
<Button onClick={() => setForm("adicionar")}>Adicionar</Button>
<Button onClick={() => setForm("atualizar")}>Atualizar</Button>
<Button onClick={() => setForm("deletar")}>Deletar</Button>
{form === "adicionar" && <Cadastrar />}
{form === "atualizar" && <Atualizar />}
{form === "deletar" && <Deletar />}

</div>
    )
}

export default Cliente;