import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Projects/Header";

// Suponha que você tenha esses componentes prontos
import Todo from "./Projects/Todo";
import Contador from "./Projects/Contador";
import Tictactoe from "./Projects/Tictactoe"
import Calculadora from "./Projects/Calculadora";
import Cep from "./Projects/Cep";

function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/jogo-da-velha" element={<Tictactoe />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/cep" element={<Cep />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
