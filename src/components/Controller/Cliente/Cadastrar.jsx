import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";
import "./styles.css";
export const Cadastrar = () => {
    const [cpf, setCPF] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [complemento, setComplemento] = useState("");
    const [estado, setEstado] = useState("");
    const [numero, setNumero] = useState("");
    const [rua, setRua] = useState("");
    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");

    const cadastrar = (e) => {
        e.preventDefault();
        try{
        api.post("/cliente", {
            cpf,
            dataNascimento,
            email,
            endereco: {
                bairro,
                cep,
                cidade,
                complemento,
                estado,
                numero,
                rua
            },
            nome,
            usuario
        } )
            alert("Usuário cadastrado com sucesso!");
        } catch (err) {
            alert("Erro",err);
        }
        return;
        }

    return (
        <>
<Form className="container-forms" onSubmit={(e) => cadastrar(e)}>
<h1 className="mb-5">Cadastrar Cliente</h1>
        <Form.Group>
        <Form.Label>Nome</Form.Label>
            <Form.Control
            value={nome}
            type="text"
            onChange={(e) => setNome(e.target.value)}
            />
            <Form.Label>CPF</Form.Label>
            <Form.Control
            value={cpf}
            type="text"
            onChange={(e) => setCPF(e.target.value)}
            />
            <Form.Label>Usuário</Form.Label>
            <Form.Control
            value={usuario}
            type="text"
            onChange={(e) => setUsuario(e.target.value)}
            />
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
            value={dataNascimento}
            type="text"
            onChange={(e) => setDataNascimento(e.target.value)}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            />
          <Form.Label>Cep</Form.Label>
          <Form.Control
          value={cep}
          type="text"
          onChange={(e) => setCep(e.target.value)}
          />
          <Form.Label>Rua</Form.Label>
          <Form.Control
          value={rua}
          type="text"
          onChange={(e) => setRua(e.target.value)}
          />
          <Form.Label>Número</Form.Label>
          <Form.Control
          value={numero}
          type="text"
          onChange={(e) => setNumero(e.target.value)}
          />
          <Form.Label>Complemento</Form.Label>
          <Form.Control
          value={complemento}
          type="text"
          onChange={(e) => setComplemento(e.target.value)}
          />
          <Form.Label>Bairro</Form.Label>
          <Form.Control
          value={bairro}
          type="text"
          onChange={(e) => setBairro(e.target.value)}
          />
          <Form.Label>Cidade</Form.Label>
          <Form.Control
          value={cidade}
          type="text"
          onChange={(e) => setCidade(e.target.value)}
          />
          <Form.Label>Estado</Form.Label>
          <Form.Control
          value={estado}
          type="text"
          onChange={(e) => setEstado(e.target.value)}
          />
        </Form.Group>
        <Button className="mt-5" type="submit">Cadastrar</Button>
      </Form>
      </>
    );
};