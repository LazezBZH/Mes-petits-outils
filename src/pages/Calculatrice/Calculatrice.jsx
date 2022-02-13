import "./Calculatrice.css";

export default function Calculatrice() {
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i}>{i}</button>);
    }
    return digits;
  };
  return (
    <div className="ma-calculatrice">
      <div className="calculatrice">
        <div className="display">
          <span>(0)</span>0
        </div>
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>Effacer</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button>0</button>
          <button>,</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}
