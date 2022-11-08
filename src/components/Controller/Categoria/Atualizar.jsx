import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const Atualizar = () => {

    const [listaCategorias, setListaCategorias] = useState([]);
    const [descricao, setDescricao] = useState("");
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
  
    useEffect(() => {
        const getCategorias = async () => {
          try {
            const response = await api.get("/categoria");
            setListaCategorias(response.data);
          } catch (err) {
            console.log(err);
          }
        };
        getCategorias();
      }, []);


      useEffect(() =>{
        const setCategoria = () => {
            const categoria = listaCategorias.find((l) => l.id == id)
            console.log(categoria);
            setDescricao(categoria?.descricao)
            setNome(categoria?.nome)
        }
        setCategoria();
      },[id]);


    console.log(listaCategorias);

    const atualizar = (e) => {
      e.preventDefault();
      try{
        api.put(`/categoria/${id}`,{
          descricao,
          nome
      })
        alert("Categoria Atualizado com sucesso!");
      } catch (err) {
      alert("Erro", err)
  }
      };

      return (
      <>
      <h1>Atualizar Categoria</h1>
      <Form onSubmit={(e) => atualizar(e)}>
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
          <Form.Label>nome</Form.Label>
          <Form.Control
          value={nome}
          type="text"
          onChange={(e) => setNome(e.target.value)}
        />
       </Form.Group>
       <Button type="submit">Atualizar</Button>
      </Form>
      </>
  )
}
