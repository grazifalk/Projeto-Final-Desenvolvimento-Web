import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { api } from "../../api";

// import { Link } from "react-router-dom";

export const CardProdutos = (props) => {
  const [produtos, setProduto] = useState([]);

  useEffect(() => {
    api.get("/produto")
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      {produtos.map((props) => { return (
        <Card className="my-3 rounded" key={props.id}>
          <Card.Img src={props.fotoLink} height={250} width={250} />
          <Card.Body>
            <Card.Title>{props.nome}</Card.Title>
            <Card.Text>{props.valor}</Card.Text>
            {/* <Link to={`/produto/${props.id}`}>Detalhe</Link> */}
          </Card.Body>
        </Card>)
      })}
    </div>
  );
};
