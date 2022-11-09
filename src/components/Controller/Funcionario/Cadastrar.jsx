import { useState } from "react";
import { Form } from "react-bootstrap";
import { api } from "../../../api";
import "./styles.css";

export const Cadastrar = () => {
    const [cpf, setCPF] = useState("");
    const [nome, setNome] = useState("");

    const cadastrar = (e) => {
        e.preventDefault();
        try{
        api.post("/funcionario", {
        cpf,
            nome
        } );
        alert("Funcionário cadastrado com sucesso!")
        } catch (err) {
        alert("Erro!", err)

        }
        return;
        }

    return (
        <>


<Form className="container-forms" onSubmit={(e) => cadastrar(e)}>
<h1 className="mb-5">Cadastrar funcionário</h1>
        <Form.Group>
            <div className="label"><Form.Label>CPF</Form.Label></div>
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
        <button type="submit" className="btn btn-outline-primary mt-5">Cadastrar</button>
        
      </Form>

      </>
    );
}