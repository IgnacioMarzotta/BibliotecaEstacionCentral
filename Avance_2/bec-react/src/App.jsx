import { Route, Routes } from "react-router-dom";
import { Navbar } from "./assets/components/Navbar";
import { Footer } from "./assets/components/Footer";
import { Producto, Perfil, Catalogo, Home } from "./pages";

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/producto" element={<Producto />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;