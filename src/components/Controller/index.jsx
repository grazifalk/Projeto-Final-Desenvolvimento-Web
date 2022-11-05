import { useState } from "react";
import { Button } from "react-bootstrap";
import { Atualiza } from "./Cliente/Atualiza";
import { Cadastro } from "./Cliente/Cadastro";
import { Deleta } from "./Cliente/Deleta";

export const Gerenciar = () => {
  const [form, setForm] = useState("");
  return (
    <div>
      <h1>Gerenciar Cliente</h1>
      <Button onClick={() => setForm("adicionar")}>Adicionar</Button>
      <Button onClick={() => setForm("atualizar")}>Atualizar</Button>
      <Button onClick={() => setForm("deletar")}>Deletar</Button>
      {form === "adicionar" && <Cadastro />}
      {form === "atualizar" && <Atualiza />}
      {form === "deletar" && <Deleta />}
    </div>
  );
};