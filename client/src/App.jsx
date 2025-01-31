import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import child from "./components/images/image.png";
import SucessStories from "./components/SuccessStories";
import NGOs from "./NGO"; // Use relative path without the leading /
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import logo from "./components/images/image copy.png"

// Components
const Home = () => {
  <div></div>;
};
// App Component
const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <header style={styles.header}>
        <img src= {logo} style={styles.logo}></img>
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
        <div style={styles.heading}>
          <h1>
            To The people
            <br />
            for the people
            <br />
            by the prople
          </h1>
          <img src={child}></img>
        </div>
        <button style={styles.btn}>Donate</button>
        <div>
          <SucessStories />
        </div>
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={""} />
            <Route path="/NGOs" element={<NGOs />} />
          </Routes>
        </main>
        <footer style={styles.footer}>
          &copy; 2025 Donate the Smile. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

// Inline CSS Styles
const styles = {
  container: {
    fontFamily: "'Times New Roman', serif", // Correct font-family
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    width: "3rem",
    height: "3rem",
    
  },
  header: {
    backgroundColor: "#E05A5A",
    padding: "10px 20px",
    color: "#fff",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "end",
  },
  btn: {
    backgroundColor: "#E05A5A",
    padding: "10px 20px",
    color: "#fff",
    width: "8rem",
    margin: "0 auto", // This will horizontally center the button
    display: "block",
    borderRadius: "4rem",
  },
  heading: {
    backgroundColor: "#F29592",
    fontSize: "5rem",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.2rem",
  },
  navLinkHover: {
    textDecoration: "underline",
  },
  main: {
    flex: 1,
    padding: "20px",
    textAlign: "center",
  },
  page: {
    fontSize: "1.5rem",
    color: "#555",
    padding: "20px",
  },
  footer: {
    backgroundColor: "#E05A5A",
    color: "#fff",
    textAlign: "center",
    padding: "10px 0",
  },
};

export default App;
