import React, { useEffect, useState } from "react";
import bgImage from "./isopod-bg.png";

function App() {
  useEffect(() => {
    document.title = "Invertebro Farm | Premium Isopods Australia";
  }, []);

  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [cartOpen, setCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Armadillidium vulgare",
      price: 1.0,
      displayPrice: "$1.00 / per count",
      description: "Hardy beginner-friendly species. Great for bioactive enclosures.",
      image: require("./a-vulgare.jpg")
    },
    {
      id: 2,
      name: "Porcellio dilatatus",
      price: 2.0,
      displayPrice: "$2.00 / per count",
      description: "Fast breeding and prolific. Excellent clean-up crew.",
      image: require("./p-dilatatus.jpg")
    },
    {
      id: 3,
      name: "Buddelundia sp. (WA)",
      price: 4.0,
      displayPrice: "$4.00 / per count",
      description: "Native Australian burrowing species with unique behavior.",
      image: require("./buddelundia.jpg")
    }
  ];

  const addToCart = (product) => {
    const qty = quantities[product.id] ? parseInt(quantities[product.id]) : 1;
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: qty }]);
    }

    setQuantities({ ...quantities, [product.id]: 1 });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.page}>

      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navLogo}>Invertebro Farm</div>
        <div style={styles.navLinks}>
          <a href="#products" style={styles.navLink}>Shop</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
          <button
            style={styles.cartButton}
            onClick={() => setCartOpen(!cartOpen)}
          >
            Cart ({cart.reduce((sum, i) => sum + i.quantity, 0)})
          </button>
        </div>
      </nav>

      {/* Cart Panel */}
      {cartOpen && (
        <div style={styles.cartPanel}>
          <h3>Your Cart</h3>
          {cart.length === 0 && <p>No items yet.</p>}
          {cart.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <div>
                {item.name} x {item.quantity}
              </div>
              <div>
                ${(item.price * item.quantity).toFixed(2)}
                <button
                  style={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
          <hr />
          <h4>Total: ${total.toFixed(2)}</h4>
          <button
            style={{ ...styles.primaryButton, marginTop: "10px", backgroundColor: "#ffc439", color: "black" }}
            onClick={() => {
              const summary = cart
                .map(item => `${item.name} x ${item.quantity}`)
                .join(", ");

              const note = encodeURIComponent(`Isopod Order: ${summary}`);
              const amount = total.toFixed(2);

              window.location.href = `https://www.paypal.com/paypalme/YOURPAYPALUSERNAME/${amount}?note=${note}`;
            }}
          >
            Checkout with PayPal
          </button>
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    minHeight: "100vh"
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "rgba(0,0,0,0.7)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  navLogo: {
    fontWeight: "bold",
    fontSize: "18px"
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "14px"
  },
  cartButton: {
    padding: "8px 14px",
    backgroundColor: "#4caf50",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    color: "white"
  },
  cartPanel: {
    position: "fixed",
    right: 0,
    top: 70,
    width: "300px",
    backgroundColor: "#111",
    padding: "20px",
    boxShadow: "-2px 0 10px rgba(0,0,0,0.5)",
    zIndex: 2000
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontSize: "14px"
  },
  removeButton: {
    marginLeft: "8px",
    background: "none",
    border: "none",
    color: "red",
    cursor: "pointer"
  },
  hero: {
    padding: "100px 20px",
    textAlign: "center"
  },
  title: {
    fontSize: "48px",
    marginBottom: "10px"
  },
  subtitle: {
    maxWidth: "600px",
    margin: "0 auto 30px"
  },
  primaryButton: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#4caf50",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "white"
  },
  secondaryButton: {
    padding: "10px 18px",
    fontSize: "14px",
    backgroundColor: "#2e7d32",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "white"
  },
  section: {
    padding: "80px 20px",
    textAlign: "center"
  },
  sectionTitle: {
    fontSize: "28px",
    marginBottom: "30px"
  },
  productGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
  },
  card: {
    backgroundColor: "#1c1c1c",
    padding: "20px",
    borderRadius: "12px",
    width: "250px"
  },
  textBlock: {
    maxWidth: "700px",
    margin: "0 auto"
  },
  productImage: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px"
  },
  footer: {
    padding: "30px",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.8)"
  }
};

export default App;

