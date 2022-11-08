// 1° Importar quais as paginas que eu quero que ele cuide.
import Header from "./components/Header";
import Categoria from "./screens/Categoria";
import Clientes from "./screens/Clientes";
import DetalheProduto from "./screens/DetalheProduto";
import Funcionarios from "./screens/Funcionarios";
import Gerenciar from "./screens/Gerenciar";
import Home from "./screens/Home";
import Pedido from "./screens/Pedido";
import { Produtos } from "./screens/Produtos";
import {Sobre} from "./screens/Sobre"


// 2° Importar o React e tambem os componentes do React Router Dom.
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProdutosEditar } from "./screens/Produtos/editar";
import { Cart } from "./screens/Carrinho";
import { Contato } from "./screens/Contato";

const Router = () => (
  // Serve para informar que estou trabalhando com rotas no navegador
  <BrowserRouter>
    {/* O menu fica aqui para funcionar junto com o sistema de roteamento. */}
    <Header />

    {/* é como se fosse um array, aqui vão ficar minhas rotas. */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/produto-editar" element={<ProdutosEditar />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produto/:id" element={<DetalheProduto />} />
      <Route path="/pedido" element={<Pedido />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/funcionarios" element={<Funcionarios />} />
      <Route path="/categorias" element={<Categoria />} />
      <Route path="/gerenciar" element={<Gerenciar />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
