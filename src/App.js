import "./styles.css";
import Contador from "./Calculadora";
import Button from "./Boton";

export default function App() {
  return (
    <div className="Header">
      <h1>Calculadora</h1>

      <Contador />
    </div>
  );
}
