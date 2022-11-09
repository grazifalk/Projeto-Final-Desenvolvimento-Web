
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";
import "./styles.css";

export const Deletar = () => {
  const [listaCategorias, setListaCategorias] = useState([]);
  const [id, setId] = useState();

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

  const deletar = (e) => {
    e.preventDefault();
    try {
        api.delete(`/categoria/${id}`)
        alert("Categoria deletado com sucesso!");
    } catch (err) {
        alert("Erro", err)
    }
  }
  
  return (
    <>
      <Form className="container-forms" onSubmit={(e) => deletar(e)}>
      <h1 className="mb-5">Deletar categoria</h1>
        <Form.Group>
          <Form.Control className="mb-5" as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {listaCategorias.map((d) => {
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
