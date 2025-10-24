export const ContentCard = ({ title, description, price, phoneNumber }) => {
  const message = `Hola, estoy interesado en "${title}". Puedes darme más detalles?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="flex flex-col w-[250px] h-[300px] p-6 bg-white shadow-xl rounded-lg font-family-secondary">
      <div className="flex-grow">
        <h3 className="text-xl text-purple text-center font-bold mb-6 border-b-3 border-purple pb-1">{title}</h3>
        <p className="text-purple/80 mb-4">{description}</p>
      </div>
      <h3 className="text-2xl text-purple text-center font-semibold">{price}$</h3>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block w-full bg-purple hover:bg-celestial text-white font-bold py-2 px-4 rounded text-center transition-colors duration-300 cursor-pointer"
      >
        Me interesa
      </a>
    </div>
  )
}