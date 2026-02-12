import React, { useEffect } from "react";
import bgImage from "./isopod-bg.png";

function App() {
  useEffect(() => {
    document.title = "Invertebro Farm | Premium Isopods Australia";
  }, []);

  const products = [
    {
      name: "Armadillidium vulgare",
      price: "$1.00 / per count",
      description:
        "Hardy beginner-friendly species. Great for bioactive enclosures.",
      image: require("./a-vulgare.jpg"),
    },
    {
      name: "Porcellio dilatatus",
      price: "$2.00 / per count",
      description: "Fast breeding and prolific. Excellent clean-up crew.",
      image: require("./p-dilatatus.jpg"),
    },
    {
      name: "Buddelundia sp. (WA)",
      price: "$4.00 / per count",
      description: "Native Australian burrowing species with unique behavior.",
      image: require("./buddelundia.jpg"),
    },
  ];

  return (
    <div style={styles.page}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navLogo}>Invertebro Farm</div>
        <div style={styles.navLinks}>
          <a href="#products" style={styles.navLink}>
            Shop
          </a>
          <a href="#about" style={styles.navLink}>
            About
          </a>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Invertebro Farm</h1>

        <p style={styles.subtitle}>
          Premium isopods bred in Australia. Healthy colonies, ethical breeding,
          and quality genetics for hobbyists and collectors.
        </p>
        <button style={styles.primaryButton}>Shop Now</button>
      </section>

      {/* Products */}
      <section id="products" style={styles.section}>
        <h2 style={styles.sectionTitle}>Available Isopods</h2>
        <div style={styles.productGrid}>
          {products.map((product, index) => (
            <div key={index} style={styles.card}>
              <img
                src={product.image}
                alt={product.name}
                style={styles.productImage}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p style={{ fontWeight: "bold" }}>{product.price}</p>
              <button style={styles.secondaryButton}>Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{ ...styles.section, backgroundColor: "#1b2e1b" }}
      >
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.textBlock}>
          Based in Australia, we specialise in breeding quality isopods with
          proper nutrition, controlled humidity, and ethical care practices. Our
          goal is to provide strong starter colonies and support the growing
          invertebrate community.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact & Orders</h2>
        <p>Email: Invertebrotv@gmail.com</p>
        <div style={{ marginTop: "20px" }}>
          <button
            style={styles.primaryButton}
            onClick={() =>
              window.open(
                "https://www.instagram.com/invertebro_farm/",
                "_blank"
              )
            }
          >
            Visit Instagram
          </button>
          <button
            style={{ ...styles.secondaryButton, marginLeft: "10px" }}
            onClick={() =>
              (window.location.href = "mailto:Invertebrotv@gmail.com")
            }
          >
            Email Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Invertebro Farm. All rights reserved.
        <br />
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    minHeight: "100vh",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "rgba(0,0,0,0.7)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  navLogo: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
  },
  hero: {
    padding: "100px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },
  domainLink: {
    display: "inline-block",
    marginBottom: "20px",
    fontSize: "18px",
    color: "#a5d6a7",
    textDecoration: "none",
  },
  subtitle: {
    maxWidth: "600px",
    margin: "0 auto 30px",
  },
  primaryButton: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#4caf50",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "white",
  },
  secondaryButton: {
    padding: "10px 18px",
    fontSize: "14px",
    backgroundColor: "#2e7d32",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "white",
  },
  section: {
    padding: "80px 20px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "28px",
    marginBottom: "30px",
  },
  productGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    backgroundColor: "#1c1c1c",
    padding: "20px",
    borderRadius: "12px",
    width: "250px",
  },
  textBlock: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  productImage: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  footer: {
    padding: "30px",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

export default App;
