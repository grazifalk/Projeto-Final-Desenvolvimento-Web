import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

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
            <h1>Buscar Todos os Produtos</h1>
            <Form onSubmit={(e) => BuscarTodos(e)}>
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

                <Button type="submit">Buscar Todos</Button>
            </Form>
        </>
    );
};