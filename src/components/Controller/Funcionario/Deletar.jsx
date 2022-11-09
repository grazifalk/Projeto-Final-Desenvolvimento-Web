import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";
import "./styles.css";

export const Deletar = () => {
  const [listaFuncionarios, setListaFuncionarios] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    const getFuncionarios = async () => {
      try {
        const response = await api.get("/funcionario");
        setListaFuncionarios(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFuncionarios();
  }, []);

  const deletar = (e) => {
    e.preventDefault();
    try {
    api.delete(`/funcionario/${id}`);
    alert("Funcionário deletado com sucesso!");
    } catch (err) {
    alert("Erro", err);
    }
    };

  return (
    <>
      <Form className="container-forms" onSubmit={(e) => deletar(e)}>
      <h1 className="mb-5">Deletar funcionário</h1>
        <Form.Group>
          <Form.Control
            as="select"
            value={id}
            onChange={(e) => setId(e.target.value)}
          >
            {listaFuncionarios.map((d) => {
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
