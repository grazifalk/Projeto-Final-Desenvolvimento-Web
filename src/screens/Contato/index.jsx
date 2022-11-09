import React from "react";
import "./styles.js";
import { Form } from "react-bootstrap";
import "./styles.css";
export const Contato = ()=> {
    return (
        <>

            <div className="container-contato">
            <h1 className="text-center mt-5">Entre em Contato</h1>
                <Form class="form">
                    <label className="me-1" for="name">Nome Completo</label>
                    <input type="text" name="name" id="name" placeholder="Digite seu nome" required />
                    <label className="me-1 mt-5" for="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Digite seu email" required />
                    <label className="me-5 mt-5" for="message">Mensagem</label>
                    <textarea name="message" id="message" placeholder="Escreva aqui..." required></textarea>
                    <button class="btn btn-primary" onclick="salvarForm()" id="btn-enviar">Enviar Mensagem</button>
                </Form>
            </div>
        </>
     );

}