import { useState } from "react";

const Contador = () => {
  // Estados para guardar información
  const [numeroActual, setNumeroActual] = useState("0"); // Lo que se ve en pantalla
  const [numeroAnterior, setNumeroAnterior] = useState(null); // El primer número
  const [operacion, setOperacion] = useState(null); // +, -, ×, ÷

  // Función para aumentar el número (tu función original, pero mejorada)
  function Aumentar() {
    // Convertimos a número y sumamos 1
    const numeroComoNumero = Number(numeroActual);
    setNumeroActual((numeroComoNumero + 1).toString());
  }

  // Función para añadir números
  const inputNumber = (num) => {
    if (numeroActual === "0") {
      setNumeroActual(num.toString());
    } else {
      setNumeroActual(numeroActual + num);
    }
  };

  // Función para manejar operaciones (+, -, ×, ÷)
  const manejarOperacion = (op) => {
    setNumeroAnterior(numeroActual); // Guardamos el número actual
    setOperacion(op); // Guardamos qué operación hacer
    setNumeroActual("0"); // Limpiamos pantalla para el siguiente número
  };

  // Función para calcular usando IFs (como pediste)
  const calcular = () => {
    // Si no hay número anterior u operación, no hacemos nada
    if (numeroAnterior === null || operacion === null) {
      return;
    }

    // Convertimos los textos a números
    const num1 = Number(numeroAnterior);
    const num2 = Number(numeroActual);
    let resultado;

    // AQUÍ ESTÁN LOS IFs PARA HACER LAS OPERACIONES
    if (operacion === "+") {
      resultado = num1 + num2;
    } else if (operacion === "-") {
      resultado = num1 - num2;
    } else if (operacion === "×") {
      resultado = num1 * num2;
    } else if (operacion === "÷") {
      if (num2 === 0) {
        resultado = "Error"; // No se puede dividir por 0
      } else {
        resultado = num1 / num2;
      }
    } else {
      resultado = num2; // Si no hay operación válida, mostramos el número actual
    }

    // Mostramos el resultado y limpiamos
    setNumeroActual(resultado.toString());
    setNumeroAnterior(null);
    setOperacion(null);
  };

  // Función para limpiar todo
  const limpiar = () => {
    setNumeroActual("0");
    setNumeroAnterior(null);
    setOperacion(null);
  };

  // Función para borrar último dígito
  const borrarUltimo = () => {
    if (numeroActual.length > 1) {
      setNumeroActual(numeroActual.slice(0, -1));
    } else {
      setNumeroActual("0");
    }
  };

  return (
    <div>
      <h1>Calculadora con IFs</h1>

      {/* Pantalla principal donde se ve el resutado */}
      <div className="caja">{numeroActual}</div>

      {/* Info de debug */}
      <div>
        <p>Número anterior: {numeroAnterior || "ninguno"}</p>
        <p>Operación: {operacion || "ninguna"}</p>
        <p>Número actual: {numeroActual}</p>
      </div>

      {/* Tu botón original mejorado */}
      <div>
        <button onClick={Aumentar}>Aumentar +1</button>
        <button onClick={limpiar}>C (Limpiar)</button>
      </div>
      <br />

      <div>
        <button onClick={() => inputNumber(7)}>7</button>
        <button onClick={() => inputNumber(8)}>8</button>
        <button onClick={() => inputNumber(9)}>9</button>
        <button onClick={() => manejarOperacion("÷")}>÷</button>
      </div>
      <br />

      <div>
        <button onClick={() => inputNumber(4)}>4</button>
        <button onClick={() => inputNumber(5)}>5</button>
        <button onClick={() => inputNumber(6)}>6</button>
        <button onClick={() => manejarOperacion("×")}>×</button>
      </div>
      <br />

      <div>
        <button onClick={() => inputNumber(1)}>1</button>
        <button onClick={() => inputNumber(2)}>2</button>
        <button onClick={() => inputNumber(3)}>3</button>
        <button onClick={() => manejarOperacion("-")}>-</button>
      </div>
      <br />

      {/* Número 0 y otras funciones */}
      <div>
        <button onClick={() => inputNumber(0)}>0</button>
        <button onClick={borrarUltimo}>← (Borrar)</button>
        <button onClick={() => manejarOperacion("+")}>+</button>
      </div>
      <br />

      {/* Botón de igual */}
      <div>
        <button onClick={calcular}>= CALCULAR</button>
      </div>

      <hr />
    </div>
  );
};

export default Contador;
