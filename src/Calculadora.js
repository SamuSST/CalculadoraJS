import { useState } from "react";

const Contador = () => {
  const [numeroActual, setNumeroActual] = useState("0");
  const [numeroAnterior, setNumeroAnterior] = useState(null);
  const [operacion, setOperacion] = useState(null);

  function Aumentar() {
    const numeroComoNumero = Number(numeroActual);
    setNumeroActual((numeroComoNumero + 1).toString());
  }
  /*si el numero actual es 0 enotces convierte el numero ingresado en string y los
 cambia por el 0 pero si no es igual a 0 entonces sigue concatenando sin 
 remplazar ningun numero*/
  const inputNumber = (num) => {
    if (numeroActual === "0") {
      setNumeroActual(num.toString());
    } else {
      setNumeroActual(numeroActual + num);
    }
  };
  {
    /* Cuando se elije una operacion el numero actual se vuelve el numero anterior*/
  }
  const manejarOperacion = (op) => {
    setNumeroAnterior(numeroActual);
    setOperacion(op);
    setNumeroActual("0");
  };
  {
    /* if para ver que se hace en caso de elegir cualquier operacion "no se puede dividir por 0 :v */
  }
  const calcular = () => {
    if (numeroAnterior === null || operacion === null) {
      return;
    }

    const num1 = Number(numeroAnterior);
    const num2 = Number(numeroActual);
    let resultado;

    if (operacion === "+") {
      resultado = num1 + num2;
    } else if (operacion === "-") {
      resultado = num1 - num2;
    } else if (operacion === "×") {
      resultado = num1 * num2;
    } else if (operacion === "÷") {
      if (num2 === 0) {
        resultado = "Error";
      } else {
        resultado = num1 / num2;
      }
    } else {
      resultado = num2;
    }

    setNumeroActual(resultado.toString());
    setNumeroAnterior(null);
    setOperacion(null);
  };

  const limpiar = () => {
    setNumeroActual("0");
    setNumeroAnterior(null);
    setOperacion(null);
  };

  const borrarUltimo = () => {
    if (numeroActual.length > 1) {
      setNumeroActual(numeroActual.slice(0, -1));
    } else {
      setNumeroActual("0");
    }
  };

  return (
    <div>
      {/* Pantalla principal */}
      <div>
        <h2>{numeroActual}</h2>
      </div>

      {/* Info de debug */}
      <div>
        <p>
          <strong>Número anterior:</strong> {numeroAnterior || "ninguno"}
        </p>
        <p>
          <strong>Operación:</strong> {operacion || "ninguna"}
        </p>
        <p>
          <strong>Número actual:</strong> {numeroActual}
        </p>
      </div>

      {/* Botones */}
      <div>
        <button onClick={Aumentar}>Aumentar +1</button>
        <button onClick={limpiar}>Limpiar</button>
      </div>

      <div>
        <button onClick={() => inputNumber(7)}>7</button>
        <button onClick={() => inputNumber(8)}>8</button>
        <button onClick={() => inputNumber(9)}>9</button>
        <button onClick={() => manejarOperacion("÷")}>÷</button>
      </div>

      <div>
        <button onClick={() => inputNumber(4)}>4</button>
        <button onClick={() => inputNumber(5)}>5</button>
        <button onClick={() => inputNumber(6)}>6</button>
        <button onClick={() => manejarOperacion("×")}>×</button>
      </div>

      <div>
        <button onClick={() => inputNumber(1)}>1</button>
        <button onClick={() => inputNumber(2)}>2</button>
        <button onClick={() => inputNumber(3)}>3</button>
        <button onClick={() => manejarOperacion("-")}>-</button>
      </div>

      <div>
        <button onClick={() => inputNumber(0)}>0</button>
        <button onClick={borrarUltimo}>←</button>
        <button onClick={() => manejarOperacion("+")}>+</button>
      </div>

      <div>
        <button onClick={calcular}>= CALCULAR</button>
      </div>
    </div>
  );
};

export default Contador;
