import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("https://webkinesara-back.onrender.com/servicios");
          setServices(response.data.servicios);
      } catch (error) {
        console.error("Error al cargar los servicios:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="servicios" className="py-16 bg-gray-50 w-full">
      <div className="w-full px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#004173]">
          Nuestros Servicios
        </h2>

        {services.length > 0 ? (
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-10
              max-w-7xl
              mx-auto
            "
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="
                  w-4/5
                  sm:w-[45%]
                  lg:w-[30%]
                  flex
                  justify-center
                "
              >
                <Card
                  icon={service.icono}
                  title={service.titulo}
                  description={service.descripcion}
                  price={service.precio}
                  image={service.imagen}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Cargando servicios...</p>
        )}
      </div>
    </section>
  );
};

export default Service;
