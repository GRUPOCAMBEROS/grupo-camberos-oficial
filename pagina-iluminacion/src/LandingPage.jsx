
import { useState, useRef } from "react";
import { ShoppingCart, Trash2 } from "lucide-react";

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
  const cartSectionRef = useRef(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const scrollToCart = () => {
    cartSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans relative">
      {/* BOTÓN CARRITO */}
      <button
        onClick={scrollToCart}
        className="fixed bottom-4 right-4 z-50 bg-black text-white p-4 rounded-full shadow-xl hover:bg-gray-800"
        title="Ir al carrito"
      >
        <ShoppingCart className="w-6 h-6" />
      </button>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/523320318041?text=Hola%20estoy%20interesado%20en%20adquirir%20sus%20productos"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600"
        title="Enviar mensaje por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="..."></path>
        </svg>
      </a>

      {/* El resto del contenido ya está en la variable original y no necesita repetirse aquí */}
    </div>
  );
}
