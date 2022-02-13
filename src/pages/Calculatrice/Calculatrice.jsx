import { useState } from "react";
import "./Calculatrice.css";

export default function Calculatrice() {
  const [calcul, setCalcul] = useState("");
  const [resultat, setResultat] = useState("");

  const ops = ["/", "*", "+", "-", ","];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calcul === "") ||
      (ops.includes(value) && ops.includes(calcul.slice(-1)))
    ) {
      return;
    }
    setCalcul(calcul + value);
    if (!ops.includes(value)) {
      setResultat(eval(calcul + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculer = () => {
    setCalcul(eval(calcul).toString());
  };

  const effacer = () => {
    if (calcul === "") {
      return;
    }
    const value = calcul.slice(0, -1);
    setCalcul(value);
    if (ops.includes(value.slice(-1))) {
      setResultat(eval(value.toString().slice(0, -1)));
    } else {
      setResultat(eval(value.toString()));
    }
  };

  return (
    <div className="ma-calculatrice">
      <div className="calculatrice">
        <div className="display">
          {resultat ? <span>({resultat})</span> : ""}&nbsp; {calcul || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={effacer}>Effacer</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>,</button>
          <button onClick={calculer}>=</button>
        </div>
      </div>
    </div>
  );
}
