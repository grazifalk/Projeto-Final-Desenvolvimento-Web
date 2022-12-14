import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";
import "./styles.css";

export const Deletar = () => {
  const [listaClientes, setListaClientes] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    const getClientes = async () => {
        try{
            const response = await api.get("/cliente")
            setListaClientes(response.data);
        } catch (err) {
            alert("Erro", err);
        }
    }
    getClientes();
}, [])

  const deletar = (e) => {
    e.preventDefault();
    try {
        api.delete(`/cliente/${id}`)
        alert("Usuário deletado com sucesso!");
    } catch (err) {
        alert("Erro", err)
    }
  }
  
  return (
    <>
      <Form className="container-forms" onSubmit={(e) => deletar(e)}>
      <h1 className="mb-5">Deletar cliente</h1>
        <Form.Group>
          <Form.Control as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {listaClientes.map((d) => {
              return (
                <option key={d.id} value={d.id}>
                  {d.nome}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>

        <Button className="mt-5" type="submit">Deletar</Button>
      </Form>
    </>
  );
};