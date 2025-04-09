import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="menu">
      <Link to="/todo" className="hover:bg-green-700 px-3 py-2 rounded">To-Do List</Link>
      <Link to="/contador" className="hover:bg-green-700 px-3 py-2 rounded">Contador de Cliques</Link>
      <Link to="/jogo-da-velha" className="hover:bg-green-700 px-3 py-2 rounded">Jogo da Velha</Link>
      <Link to="/calculadora" className="hover:bg-green-700 px-3 py-2 rounded">Calculadora</Link>
      <Link to="/cep" className="hover:bg-green-700 px-3 py-2 rounded">Buscador de CEP</Link>
    </header>
  );
}
