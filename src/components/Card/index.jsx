import React, { useContext, useEffect, useState } from "react";
import { api } from "../../api";
import { ImagemProduto } from "./styles";
import { CartContext } from "../../context/cart";

// import { Link } from "react-router-dom";

export const CardProdutos = (props) => {
  const [produtos, setProduto] = useState([]);
  const { handleAddItemToCart } = useContext(CartContext);
  useEffect(() => {
    api
      .get("/produto")
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Produtos Disponíveis
            </h1>
          </div>
          <div className="row justify-content-center">
            {produtos.map((props) => {
              return (
                <div className="col-md-3 mb-4" key={props.id}>
                  <div className="card text-center card-item" width="18rem">
                    <ImagemProduto src={props.fotoLink} alt={props.nome} />
                    <div className="card-body">
                      <h5 className="card-title text-dark mb-0">
                        {props.nome.substring(0, 12)}...
                      </h5>
                      <p className="card-text lead fw-bold">R${props.valor}</p>
                      <button onClick={() => handleAddItemToCart(props.id, props.fotoLink, props.nome, props.valor)}>Adicionar</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
