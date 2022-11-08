import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const Cadastrar = () => {
    const [cpf, setCPF] = useState("");
    const [nome, setNome] = useState("");

    const cadastrar = (e) => {
        e.preventDefault();
        try{
        api.post("/funcionario", {
        cpf,
            nome
        } )
        } catch (err) {
            console.log(err);
        }
        return;
        }

    return (
        <>

<h1>Cadastrar funcionário</h1>
<Form onSubmit={(e) => cadastrar(e)}>
        <Form.Group>
            <Form.Label>CPF</Form.Label>
          <Form.Control
          value={cpf}
          type="text"
          onChange={(e) => setCPF(e.target.value)}
          />
          <Form.Label>Nome</Form.Label>
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