import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Atualizar } from "../../components/Controller/Produto/Atualizar";
import { Cadastrar } from "../../components/Controller/Produto/Cadastrar";
import { Deletar } from "../../components/Controller/Produto/Deletar";

export const ProdutosEditar = () => {
  const [form, setForm] = useState("");
  return (
    <>
      <div className="div-menu-four h1-gerenciar-produto">
        <div>
          <h1 className="h1-title">Gerenciar Produto</h1>
        </div>
        <Button
          className="button-gerenciar-y four"
          onClick={() => setForm("adicionar")}
        >
          Adicionar
        </Button>
        <Button
          className="button-gerenciar-y four"
          onClick={() => setForm("atualizar")}
        >
          Atualizar
        </Button>
        <Button
          className="button-gerenciar-y four"
          onClick={() => setForm("deletar")}
        >
          Deletar
        </Button>
        {form === "adicionar" && <Cadastrar />}
        {form === "atualizar" && <Atualizar />}
        {form === "deletar" && <Deletar />}
      </div>
    </>
  );
};
