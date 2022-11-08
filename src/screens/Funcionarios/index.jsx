import { useState } from "react";
import { Button } from "react-bootstrap";
import { Cadastrar } from "../../components/Controller/Funcionario/Cadastrar";
import { Atualizar } from "../../components/Controller/Funcionario/Atualizar";
import { Deletar } from "../../components/Controller/Funcionario/Deletar";
import "./styles.css"

const Funcionarios = () => {
    const [form, setForm] = useState("");
    console.log(form);

    return (
        <>
        <div className="div-menu-four h1-gerenciar-funcionario">
            <div>
            <h1 className="h1-title">Gerenciar Funcionário</h1>
            </div>
        <Button className="button-gerenciar-y four" onClick={() => setForm("adicionar")}>Adicionar</Button>
        <Button className="button-gerenciar-y four" onClick={() => setForm("atualizar")}>Atualizar</Button>
        <Button className="button-gerenciar-y four" onClick={() => setForm("deletar")}>Deletar</Button>
        {form === "adicionar" && <Cadastrar />}
        {form === "atualizar" && <Atualizar />}
        {form === "deletar" && <Deletar />}
        </div>
        </>
    )
}

export default Funcionarios;