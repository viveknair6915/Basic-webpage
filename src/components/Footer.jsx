import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 My Website. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  },
};

export default Footer;