import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const Atualizar = () => {

    const [listaClientes, setListaClientes] = useState([]);
    const [id, setId] = useState();
    const [cpf, setCPF] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [complemento, setComplemento] = useState("");
    const [estado, setEstado] = useState("");
    const [numero, setNumero] = useState("");
    const [rua, setRua] = useState("");
    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
   

    useEffect(() => {
        const getClientes = async () => {
          try {
            const response = await api.get("/cliente");
            setListaClientes(response.data);
          } catch (err) {
            alert("Erro", err);
          }
        };
        getClientes();
      }, []);

      useEffect(() =>{
        const setCliente = () => {
            const cliente = listaClientes.find((l) => l.id == id)
            console.log(cliente);
            setNome(cliente?.nome)
            setCPF(cliente?.cpf)
            setDataNascimento(cliente?.dataNascimento)
            setEmail(cliente?.email)
            setUsuario(cliente?.usuario),
            setBairro(cliente?.endereco.bairro)
            setCep(cliente?.endereco.cep)
            setCidade(cliente?.endereco.cidade)
            setComplemento(cliente?.endereco.complemento)
            setEstado(cliente?.endereco.estado)
            setNumero(cliente?.endereco.numero)
            setRua(cliente?.endereco.rua)

            
        }
        setCliente();
      },[id]);

      
    console.log(listaClientes);

    const atualizar = (e) => {
        e.preventDefault();
        try{
          api.put(`/cliente/${id}`,{
            cpf ,
            dataNascimento,
            email,
            endereco: {
                bairro,
                cep,
                cidade,
                complemento,
                estado,
                numero,
                rua
            },
            nome,
            usuario
        });
          alert("Usuário atualizado com sucesso!");
        } catch (err) {
        alert("Erro", err)
        }
    };

        return (
        <>
        <h1>Atualizar Cliente</h1>
        <Form onSubmit={(e) => atualizar(e)}>
        <Form.Group>
          <Form.Control
            as="select"
            value={id}
            onChange={(e) => setId(e.target.value)}>
            {listaClientes.map((d) => {
                return (<option key={d.id} value={d.id}>{d.nome}</option>);
            })}
          </Form.Control>
            <Form.Label>Nome</Form.Label>
            <Form.Control
            value={nome}
            type="text"
            onChange={(e) => setNome(e.target.value)} 
            />
            <Form.Label>CPF</Form.Label>
            <Form.Control
            value={cpf}
            type="text"
            onChange={(e) => setCPF(e.target.value)}
            />
            <Form.Label>Usuário</Form.Label>
            <Form.Control
            value={usuario}
            type="text"
            onChange={(e) => setUsuario(e.target.value)}
            />
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
            value={dataNascimento}
            type="text"
            onChange={(e) => setDataNascimento(e.target.value)}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            />
          <Form.Label>Cep</Form.Label>
          <Form.Control
          value={cep}
          type="text"
          onChange={(e) => setCep(e.target.value)}
          />
          <Form.Label>Rua</Form.Label>
          <Form.Control
          value={rua}
          type="text"
          onChange={(e) => setRua(e.target.value)}
          />
          <Form.Label>Número</Form.Label>
          <Form.Control
          value={numero}
          type="text"
          onChange={(e) => setNumero(e.target.value)}
          />
          <Form.Label>Complemento</Form.Label>
          <Form.Control
          value={complemento}
          type="text"
          onChange={(e) => setComplemento(e.target.value)}
          />
          <Form.Label>Bairro</Form.Label>
          <Form.Control
          value={bairro}
          type="text"
          onChange={(e) => setBairro(e.target.value)}
          />
          <Form.Label>Cidade</Form.Label>
          <Form.Control
          value={cidade}
          type="text"
          onChange={(e) => setCidade(e.target.value)}
          />
          <Form.Label>Estado</Form.Label>
          <Form.Control
          value={estado}
          type="text"
          onChange={(e) => setEstado(e.target.value)}
          />
         </Form.Group>
         <Button type="submit">Atualizar</Button>
        </Form>
        </>
    );
};