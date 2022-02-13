import tools from "../../assets/tools.png";
import calculatrice from "../../assets/calculatrice.png";
import calculs from "../../assets/calculs.png";
import convertisseurs from "../../assets/convertisseurs.png";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1 className="Home-title">Mes petits outils</h1>
        <img src={tools} className="Home-logo" alt="logo" />
      </header>
      <main>
        <div className="Home-links">
          <div className="Home-link">
            <Link to="/calculatrice">
              Calculatrice
              <img src={calculatrice} className="Home-img" alt="calculatrice" />
            </Link>
          </div>
          <div className="Home-link">
            <Link to="/calculs">
              Calculs
              <img src={calculs} className="Home-img" alt="calculs" />
            </Link>
          </div>
          <div className="Home-link">
            <Link to="/convertisseurs">
              Convertisseurs
              <img
                src={convertisseurs}
                className="Home-img"
                alt="convertisseurs"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
