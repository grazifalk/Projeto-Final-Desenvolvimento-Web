import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";
import "./styles.css";

export const BuscarTodos = () => {
    const [listaProduto, setListaProduto] = useState([]);
    const [id, setId] = useState();

    useEffect(() => {
        const getProduto = async () => {
            try {
                const response = await api.get("/produto")
                setListaproduto(response.data);
            } catch (err) {
                alert("Erro", err);
            }
        }
        getProduto();
    }, [])

    return (
        <>
            <Form className="container-forms" onSubmit={(e) => BuscarTodos(e)}>
            <h1 className="mb-5">Buscar Todos os Produtos</h1>
                <Form.Group>
                    <Form.Control as="select" value={id} onChange={(e) => setId(e.target.value)}>
                        {listaProduto.map((d) => {
                            return (
                                <option key={d.id} value={d.id}>
                                    {d.nome}
                                </option>
                            );
                        })}
                    </Form.Control>
                </Form.Group>

                <Button className="mt-5" type="submit">Buscar Todos</Button>
            </Form>
        </>
    );
};