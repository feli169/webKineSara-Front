import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto  px-0  py-8 lg:py-4 flex justify-between items-center">
        {/* Logo y título */}
        <Link to="/">
        <div className="flex items-center gap-3">
          
          <img
            src={logo}
            alt="Logo"
            className="h-20"
          />
          <h1 className="text-3xl lg:text-2xl font-bold text-[#004173]">
            Kinesiología & Bienestar
          </h1>
        </div></Link>

        {/* Navegación */}
        <nav className="flex gap-4 md:gap-6 items-center">
          <a
            href="#servicios"
            className="text-[#004173] hover:text-emerald-700 text-lg md:text-base"
          >
            Servicios
          </a>

          {/* <Link to="/registro">
            <button type="button" className="btnNav btn btn-secondary me-2">
              🔐 Register
            </button>
            </Link> */}

          <a
            href="https://wa.me/56977961824"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#004173] text-white px-5 py-2 rounded-lg hover:bg-emerald-700 text-lg md:text-base"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;


