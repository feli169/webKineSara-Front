const Card = ({ icon, title, description, price, image }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center flex flex-col items-center">
      
     {/* {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      )}  */}

      <div className="text-5xl mb-4">{icon}</div>

      <h3 className="text-3xl lg:text-2xl font-semibold mb-3 text-[#004173]">{title}</h3>

      <p className="text-gray-600 text-xl">{description}</p>

      {/* {price && (
        <p className="text-2xl text-[#004173] font-bold mt-4">
          ${price.toLocaleString("es-CL")}
        </p>
      )} */}
    </div>
  );
};

export default Card;
