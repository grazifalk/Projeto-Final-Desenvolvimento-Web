// 1° Importar quais as paginas que eu quero que ele cuide.
import Home from "./screens/Home"
import {Produtos} from "./screens/Produtos";
import Pedido from "./screens/Pedido";
import Clientes from "./screens/Clientes";
import Funcionarios from "./screens/Funcionarios";
import Header from "./components/Header"
import DetalheProduto from "./screens/DetalheProduto";
import Gerenciar from "./screens/Gerenciar";

// 2° Importar o React e tambem os componentes do React Router Dom.
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"

const Router = () => (
    
    // Serve para informar que estou trabalhando com rotas no navegador
    <BrowserRouter>
    
        {/* O menu fica aqui para funcionar junto com o sistema de roteamento. */}
        <Header/>

        {/* é como se fosse um array, aqui vão ficar minhas rotas. */}
        <Routes>
            <Route exact path="/" element={<Home/>}/> 
            <Route path="/produtos" element={<Produtos/>}/> 
            <Route path="/produto/:id" element={<DetalheProduto />}/> 
            <Route path="/pedido" element={<Pedido/>}/> 
            <Route path="/clientes" element={<Clientes/>}/> 
            <Route path="/funcionarios" element={<Funcionarios/>}/>
            {/* <Route path="/categorias" element={<Categorias />}/>  */}
            <Route path="/gerenciar" element={<Gerenciar/>}/> 
        </Routes>
    </BrowserRouter>
);

export default Router;