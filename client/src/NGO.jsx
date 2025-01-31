import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom'; // Remove this if not needed.
import logo from "./components/images/image copy.png"

// NGO data
const ngos = [
  "Jyoti NGO",
  "Star NGO",
  "No Hunger",
  "Feeding All",
  "Asha Kiran",
  "Sunshine",
  "NGOs Donate",
];

// Inline CSS Styles
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px",
  },
  logo: {
    width: "1rem",
    height: "1rem",
    
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "24px",
  },
  searchInput: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "320px",
    marginBottom: "16px",
  },
  ngosGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  },
  ngoCard: {
    backgroundColor: "white",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "240px",
    textAlign: "center",
  },
  ngoName: {
    fontSize: "18px",
    fontWeight: "600",
  },
  noNGOs: {
    color: "#6b7280",
  },
};

export default function NGOList() {
  const [search, setSearch] = useState("");

  const filteredNGOs = ngos.filter((ngo) =>
    ngo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img scr = {logo} style={styles.logo}></img>
          <nav style={styles.nav}>
            <ul style={styles.navList}>
              <li style={styles.navItem}>
                <Link to="/" style={styles.navLink}>
                  Home
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/NGOs">NGOs</Link>
              </li>
            </ul>
          </nav>
        </header>
      <h1 style={styles.heading}>Listed and Verified NGOs</h1>
      <input
        type="text"
        placeholder="Search NGOs..."
        style={styles.searchInput}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={styles.ngosGrid}>
        {filteredNGOs.length > 0 ? (
          filteredNGOs.map((ngo, index) => (
            <div key={index} style={styles.ngoCard}>
              <h2 style={styles.ngoName}>{ngo}</h2>
            </div>
          ))
        ) : (
          <p style={styles.noNGOs}>No NGOs found</p>
        )}
      </div>
    </div>
  );
}