import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";
//import Funcionarios from "../../../screens/Funcionarios";
//import Categoria from "../Categoria";

export const Cadastrar = () => {

    const [dataFabricacao, setDataFabricacao] = useState("");
    const [descricao, setDescricao] = useState("");
    const [fotoLink, setFotoLink] = useState("");
    const [idFuncionario, setIdFuncionario] = useState("");
    const [nome, setNome] = useState("");
    const [nomeCategoria, setNomeCategoria] = useState("");
    const [nomeFuncionario, setNomeFuncionario] = useState("");
    const [qtdEstoque, setQtdEstoque] = useState("");
    const [valor, setValor] = useState("");

    const cadastrar = (e) => {
        e.preventDefault();
        try {
            api.post(`/produto/${id}`, {
                dataFabricacao,
                descricao,
                fotoLink,
                idFuncionario,
                nome,
                nomeCategoria,
                nomeFuncionario,
                qtdEstoque,
                valor
            })
            alert("Produto cadastrado com sucesso!");
        } catch (err) {
            alert("Erro", err)
        }
    };

    return (
        <>
            <h1>Cadastrar Produto</h1>
            <Form onSubmit={(e) => cadastrar(e)}>
                <Form.Group>
                <Form.Label>dataFabricacao</Form.Label>
                    <Form.Control
                    value={dataFabricacao}
                    type="text"
                    onChange={(e) => setDataFabricacao(e.target.value)}
                    />
                    <Form.Label>descricao</Form.Label>
                    <Form.Control
                    value={descricao}
                    type="text"
                    onChange={(e) => setDescricao(e.target.value)}
                    />
                    <Form.Label>fotoLink</Form.Label>
                    <Form.Control
                    value={fotoLink}
                    type="text"
                    onChange={(e) => setFotoLink(e.target.value)}
                    />
                    <Form.Label>idFuncionario</Form.Label>
                    <Form.Control
                    value={idFuncionario}
                    type="text"
                    onChange={(e) => setidFuncionario(e.target.value)}
                    />
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                    value={nome}
                    type="text"
                    onChange={(e) => setNome(e.target.value)}
                    />
                    <Form.Label>nomeCategoria</Form.Label>
                    <Form.Control
                    value={nomeCategoria}
                    type="text"
                    onChange={(e) => setNomeCategoria(e.target.value)}
                    />
                    <Form.Label>nomeFuncionario</Form.Label>
                    <Form.Control
                        value={nomeFuncionario}
                        type="text"
                        onChange={(e) => setnomeFuncionario(e.target.value)}
                    />
                    <Form.Label>qtdEstoque</Form.Label>
                    <Form.Control
                        value={qtdEstoque}
                        type="text"
                        onChange={(e) => setQtdEstoque(e.target.value)}
                    />
                    <Form.Label>valor</Form.Label>
                    <Form.Control
                        value={valor}
                        type="text"
                        onChange={(e) => setValor(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Cadastrar</Button>
            </Form>
        </>
    );
}
