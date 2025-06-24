import { useState, useRef } from "react";
import { ShoppingCart, Trash2 } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Lámpara de techo LED",
    type: "Lámparas",
    price: 1200,
    image: "https://images.unsplash.com/photo-1601979031925-37e7b196d0b9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Foco inteligente RGB",
    type: "Focos",
    price: 350,
    image: "https://images.unsplash.com/photo-1597764699515-3d4046c248d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Tira LED flexible",
    type: "Tiras",
    price: 480,
    image: "https://images.unsplash.com/photo-1604514628550-37477b597b7e?auto=format&fit=crop&w=600&q=80",
  },
];

export default function LandingPage() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("Todos");
  const [showMessage, setShowMessage] = useState(false);
  const cartSectionRef = useRef(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const scrollToCart = () => {
    cartSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProducts = filter === "Todos" ? products : products.filter(p => p.type === filter);

  return (
    <div className="font-sans relative">
      <button
        onClick={scrollToCart}
        className="fixed bottom-4 right-4 z-50 bg-black text-white p-4 rounded-full shadow-xl hover:bg-gray-800"
        title="Ir al carrito"
      >
        <ShoppingCart className="w-6 h-6" />
      </button>

      {showMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg z-50">
          Listo, agregaste al carrito
        </div>
      )}
    </div>
  );
}
