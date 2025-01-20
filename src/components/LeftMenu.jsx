import React, { useState } from "react";

const LeftMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div style={{ ...styles.menu, width: isCollapsed ? "60px" : "200px" }}>
      <button style={styles.collapseButton} onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? ">" : "<"}
      </button>
      <ul style={styles.list}>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </div>
  );
};

const styles = {
  menu: {
    height: "100vh",
    background: "#f4f4f4",
    padding: "20px",
    overflow: "hidden",
    transition: "width 0.3s ease",
  },
  collapseButton: {
    background: "#ddd",
    border: "none",
    cursor: "pointer",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
};

export default LeftMenu;