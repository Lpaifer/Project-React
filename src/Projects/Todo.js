import { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa(e) {
    e.preventDefault();
    if (novaTarefa.trim() === "") return;

    const nova = {
      id: Date.now(),
      texto: novaTarefa,
      concluida: false,
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa("");
  }

  function toggleTarefa(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <div className="todo-container">
      <h2>📋 Lista de Tarefas</h2>
      <form onSubmit={adicionarTarefa} className="formulario">
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="lista-tarefas">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className={tarefa.concluida ? "feito" : ""}>
            <span onClick={() => toggleTarefa(tarefa.id)}>{tarefa.texto}</span>
            <button onClick={() => removerTarefa(tarefa.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
