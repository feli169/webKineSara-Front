import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
