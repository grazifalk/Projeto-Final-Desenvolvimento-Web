import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const Atualizar = () => {
  const [listaFuncionarios, setListaFuncionarios] = useState([]);
  const [id, setId] = useState();
  const [cpf, setCPF] = useState("");
  const [nome, setNome] = useState("");

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

  useEffect(() =>{
      const setFuncionario = () => {
          const funcionario = listaFuncionarios.find((l) => l.id == id)
          console.log(funcionario);
          setNome(funcionario?.nome)
          setCPF(funcionario?.cpf)
  
      }
      setFuncionario();
    },[id]);

  console.log(listaFuncionarios);

  const atualizar = (e) => {
    e.preventDefault();
    try {
      api.put(`/funcionario/${id}`, {
        cpf,
        nome
      });
      alert("Funcionário atualizado com sucesso!")
    } catch (err) {
      alert("Erro", err);
    }
  };

  return (
    <>
      <h1>Atualizar Funcionario</h1>
      <Form onSubmit={(e) => atualizar(e)}>
        <Form.Group>
          <Form.Control
            as="select"
            value={id}
            onChange={(e) => setId(e.target.value)}>
            {listaFuncionarios.map((d) => {
              return (<option key={d.id} value={d.id}>{d.nome}</option>);
            })}
          </Form.Control>
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
        <Button type="submit">Atualizar</Button>
      </Form>
    </>
  );
};
