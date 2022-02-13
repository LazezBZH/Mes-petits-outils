import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Calculs from "./pages/Calculs/Calculs";
import Calculatrice from "./pages/Calculatrice/Calculatrice";
import Convertisseurs from "./pages/Convertisseurs/Convertisseurs";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="calculatrice" element={<Calculatrice />} />
      <Route path="calculs" element={<Calculs />} />
      <Route path="convertisseurs" element={<Convertisseurs />} />
    </Routes>
  );
}

export default App;
