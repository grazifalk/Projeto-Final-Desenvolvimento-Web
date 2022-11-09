import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";
import "./styles.css";

export const BuscarTodos = () => {

const [listaCategorias, setListaCategorias] = useState([]);
const [descricao, setDescricao] = useState("");
const [id, setId] = useState("");
const [nome, setNome] = useState("");


  useEffect(() => {
    const getCategorias = async () => {
        try{
            const response = await api.get("/categoria")
            setListaCategorias(response.data);
        } catch (err) {
            alert("Erro", err);
        }
    }
    getCategorias();
}, [])

console.log(listaCategorias);

        return (
      <>
      <Form className="container-forms" onSubmit={(e) => BuscarTodos(e)}>
      <h1 className="mb-5">Buscar tudo na Categoria</h1>
      <Form.Group>
        <Form.Control
          as="select"
          value={id}
          onChange={(e) => setId(e.target.value)}>
          {listaCategorias.map((d) => {
              return (<option key={d.id} value={d.id}>{d.nome}</option>);
          })}
        </Form.Control>
          <Form.Label>Descricao</Form.Label>
          <Form.Control
          value={descricao}
          type="text"
          onChange={(e) => setDescricao(e.target.value)}
          />
          <Form.Label>Nome</Form.Label>
          <Form.Control
          value={nome}
          type="text"
          onChange={(e) => setNome(e.target.value)}
        />
       </Form.Group>
       <Button className="mt-5" type="submit">BuscarTodos</Button>
      </Form>
      </>
  )
}