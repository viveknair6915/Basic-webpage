import React from "react";

const RightPanel = () => {
  return (
    <div style={styles.panel}>
      <h2>Right Panel</h2>
      <p>Additional information goes here.</p>
    </div>
  );
};

const styles = {
  panel: {
    width: "200px",
    background: "#f9f9f9",
    padding: "10px",
  },
};

export default RightPanel;