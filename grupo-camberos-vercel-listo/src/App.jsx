
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Lámpara de techo LED",
    price: 1200,
    image: "https://images.unsplash.com/photo-1601979031925-37e7b196d0b9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Foco inteligente RGB",
    price: 350,
    image: "https://images.unsplash.com/photo-1597764699515-3d4046c248d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Tira LED flexible",
    price: 480,
    image: "https://images.unsplash.com/photo-1604514628550-37477b597b7e?auto=format&fit=crop&w=600&q=80",
  },
];

export default function LandingPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="font-sans">
      {/* INICIO */}
      <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold mb-4">Grupo Camberos</h1>
        <p className="text-xl mb-8">Luz que transforma tus espacios</p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Explora nuestros productos
        </button>
      </section>

      {/* NOSOTROS */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-4xl font-semibold mb-6">¿Quiénes somos?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Somos una empresa mexicana especializada en ofrecer artículos de iluminación de alta calidad, innovadores y con eficiencia energética. Nuestro compromiso es brindarte luz para tus espacios, con estilo y funcionalidad.
        </p>
      </section>

      {/* PRODUCTOS */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-10">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border rounded-2xl p-4 shadow-lg bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-lg mb-4">${product.price} MXN</p>
              <button
                onClick={() => addToCart(product)}
                className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"
              >
                <ShoppingCart className="w-5 h-5" /> Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-4xl font-semibold mb-6">Contacto</h2>
        <p className="text-lg mb-8">¿Tienes dudas o necesitas una cotización? Contáctanos.</p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-4 rounded-xl border border-gray-300"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-4 rounded-xl border border-gray-300"
          />
          <input
            type="tel"
            placeholder="Número de teléfono celular"
            className="w-full p-4 rounded-xl border border-gray-300"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-4 rounded-xl border border-gray-300"
            rows="4"
          ></textarea>
          <button type="submit" className="bg-black text-white w-full px-6 py-3 rounded-xl hover:bg-gray-800">
            Enviar mensaje
          </button>
        </form>
      </section>
    </div>
  );
}
