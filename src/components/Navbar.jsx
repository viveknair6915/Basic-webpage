import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2>My Website</h2>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "#333",
    color: "#fff",
    padding: "10px 20px",
    zIndex: 1000,
    
  },
};

export default Navbar;
