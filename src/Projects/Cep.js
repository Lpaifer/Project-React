import { useState } from "react";
import "./BuscadorCep.css";

export default function BuscadorCep() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState("");

  async function buscarCep() {
    setErro("");
    setEndereco(null);

    if (!cep.match(/^\d{8}$/)) {
      setErro("CEP inválido. Digite 8 números.");
      return;
    }

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await resposta.json();

      if (dados.erro) {
        setErro("CEP não encontrado.");
      } else {
        setEndereco(dados);
      }
    } catch (e) {
      setErro("Erro ao buscar o CEP.");
    }
  }

  return (
    <div className="cep-container">
      <h2>🔍 Buscador de CEP</h2>
      <div className="formulario-cep">
        <input
          type="text"
          placeholder="Digite o CEP (somente números)"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
          maxLength={8}
        />
        <button onClick={buscarCep}>Buscar</button>
      </div>

      {erro && <p className="erro">{erro}</p>}

      {endereco && (
        <div className="resultado">
          <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
          <p><strong>Bairro:</strong> {endereco.bairro}</p>
          <p><strong>Cidade:</strong> {endereco.localidade}</p>
          <p><strong>UF:</strong> {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}
