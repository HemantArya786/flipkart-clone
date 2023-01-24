import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import ProductPage from "./Pages/Product/ProductPage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <section className="bg-primary    ">
        <Navbar />
      </section>
      <section></section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
      <section className="footer text-white ">
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
