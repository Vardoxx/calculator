import { useState } from "react";
import { numbers, operators } from "./components/symbols";
import "./Calculator.scss";

const Calculator = () => {
  const [value, setValue] = useState("");

  const functionChecker = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const operator = e.currentTarget.value;

    switch (operator) {
      case "RS":
        setValue("");
        break;

      case "RM":
        setValue(value.slice(0, -1));
        break;

      case "=":
        try {
          setValue(eval(value));
        } catch (error) {
          console.error("Ошибка при вычислении:", error);
        }
        break;

      default:
        setValue(value + operator);
        break;
    }
  };

  const numberChecker = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setValue(value + (e.target as HTMLInputElement).value);
  };

  //
  return (
    <div className="calculator">
      <header className="calculator_header">
        <div className="output">{value}</div>
      </header>
      <section className="calculator_body">
        <div className="numbers_container">
          {numbers.map((numbers) => (
            <input
              className="number"
              type="button"
              value={numbers}
              onClick={numberChecker}
            />
          ))}
        </div>
        <div className="functions_container">
          {operators.map((operators) => (
            <input
              className="function"
              type="button"
              value={operators}
              onClick={functionChecker}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Calculator;
