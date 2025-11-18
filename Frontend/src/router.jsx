import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./Views/Home";
import Footer from "./Views/Footer";
import Header from "./Views/Header";
import Registro from "./Views/Registro";
import NotFound404 from "./Views/404";

export default function AppRouter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow mt-32">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/registro" element={<Registro />} /> */}
          <Route path="/*" element={<NotFound404 />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
