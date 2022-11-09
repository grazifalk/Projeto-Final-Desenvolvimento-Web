import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";
import "./styles.css";


export const Cadastrar = () => {
const [descricao, setDescricao] = useState("");
const [id, setId] = useState("");
const [nome, setNome] = useState("");



const cadastrar = (e) => {
    e.preventDefault();
    try{
    api.post("/categoria", {
        descricao,
        nome
    } )
    alert("Categoria cadastrado com sucesso!");
} catch (err) {
alert("Erro", err)
}
return;
}

        return (
            <>
                <Form className="container-forms" onSubmit={(e) => cadastrar(e)}>
                <h1 className="mb-5">Cadastrar Categoria</h1>
                <Form.Group>
                <Form.Label>Descricao</Form.Label>
                <Form.Control
                    value={descricao}
                    type="text"
                    onChange={(e) => setDescricao(e.target.value)} 
                    />
                <Form.Label>nome</Form.Label>
                <Form.Control
                    value={nome}
                    type="text"
                    onChange={(e) => setNome(e.target.value)} 
                    />
            </Form.Group>
            <Button className="mt-5" type="submit">Cadastrar</Button>
            </Form>
            </>
        );
	}