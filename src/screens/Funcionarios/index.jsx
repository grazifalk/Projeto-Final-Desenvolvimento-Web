import "./styles.css"
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Cadastrar } from "../../components/Controller/Funcionario/Cadastrar";
import { Deletar } from "../../components/Controller/Funcionario/Deletar";
import { Atualizar } from "../../components/Controller/Funcionario/Atualizar";

const Funcionarios = () => {
    const [form, setForm] = useState("");
    console.log(form);

    return (
        <div>
        <h1>Gerenciar Funcionário</h1>
        <Button onClick={() => setForm("adicionar")}>Adicionar</Button>
        <Button onClick={() => setForm("atualizar")}>Atualizar</Button>
        <Button onClick={() => setForm("deletar")}>Deletar</Button>
        {form === "adicionar" && <Cadastrar />}
        {form === "atualizar" && <Atualizar />}
        {form === "deletar" && <Deletar />}
        </div>
    )
}

export default Funcionarios;