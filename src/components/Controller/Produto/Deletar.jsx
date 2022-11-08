import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const Deletar = () => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    const getProdutos = async () => {
      try {
        const response = await api.get("/produto")
        setListaProdutos(response.data);
      } catch (err) {
        alert("Erro", err);
      }
    }
    getProdutos();
  }, [])

  const deletar = (e) => {
    e.preventDefault();
    try {
      Api.delete(`/produto/${id}`)
      alert("Produto deletado com sucesso!");
    } catch (err) {
      alert("Erro", err)
    }
  }

  return (
    <>
      <h1>Deletar Produto</h1>
      <Form onSubmit={(e) => deletar(e)}>
        <Form.Group>
          <Form.Control as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {listaProdutos.map((d) => {
              return (
                <option key={d.id} value={d.id}>
                  {d.nome}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>

        <Button type="submit">Deletar</Button>
      </Form>
    </>
  );
};
