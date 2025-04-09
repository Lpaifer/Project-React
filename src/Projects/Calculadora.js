import { useState } from "react";
import "./Calculadora.css";

export default function Calculadora() {
  const [input, setInput] = useState("");

  function adicionar(valor) {
    setInput((prev) => prev + valor);
  }

  function limpar() {
    setInput("");
  }

  function calcular() {
    try {
      // eslint-disable-next-line no-eval
      const resultado = eval(input);
      setInput(resultado.toString());
    } catch (error) {
      setInput("Erro");
    }
  }

  return (
    <div className="calculadora-container">
      <h2>🧮 Calculadora</h2>
      <input
        className="display"
        type="text"
        value={input}
        readOnly
        placeholder="0"
      />

      <div className="botoes">
        <button onClick={limpar} className="limpar">C</button>
        <button onClick={() => adicionar("(")}>(</button>
        <button onClick={() => adicionar(")")}>)</button>
        <button onClick={() => adicionar("/")}>÷</button>

        <button onClick={() => adicionar("7")}>7</button>
        <button onClick={() => adicionar("8")}>8</button>
        <button onClick={() => adicionar("9")}>9</button>
        <button onClick={() => adicionar("*")}>×</button>

        <button onClick={() => adicionar("4")}>4</button>
        <button onClick={() => adicionar("5")}>5</button>
        <button onClick={() => adicionar("6")}>6</button>
        <button onClick={() => adicionar("-")}>−</button>

        <button onClick={() => adicionar("1")}>1</button>
        <button onClick={() => adicionar("2")}>2</button>
        <button onClick={() => adicionar("3")}>3</button>
        <button onClick={() => adicionar("+")}>+</button>

        <button onClick={() => adicionar("0")}>0</button>
        <button onClick={() => adicionar(".")}>.</button>
        <button onClick={calcular} className="igual">=</button>
      </div>
    </div>
  );
}
