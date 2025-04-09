import { useState } from "react";
import "./Contador.css";

export default function Contador() {
  const [cliques, setCliques] = useState(0);

  function incrementar() {
    setCliques(cliques + 1);
  }

  function resetar() {
    setCliques(0);
  }

  return (
    <div className="contador-container">
      <h2>🖱️ Contador de Cliques</h2>
      <div className="contador-display">
        <span>{cliques}</span>
      </div>
      <div className="contador-botoes">
        <button onClick={incrementar}>Clique +1</button>
        <button onClick={resetar}>Resetar</button>
      </div>
    </div>
  );
}
