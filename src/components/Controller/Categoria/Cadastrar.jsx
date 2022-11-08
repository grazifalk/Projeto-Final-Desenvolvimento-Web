import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";


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
                <h1>Cadastrar Categoria</h1>
                <Form onSubmit={(e) => cadastrar(e)}>
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
            <Button type="submit">Cadastrar</Button>
            </Form>
            </>
        );
	}