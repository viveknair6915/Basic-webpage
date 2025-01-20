import React from "react";

const MainContent = () => {
  return (
    <div style={styles.content}>
      <h1>Main Content Area</h1>
      <p>Here is some content for the main area of the webpage.</p>
    </div>
  );
};

const styles = {
  content: {
    flex: 1,
    padding: "20px",
  },
};

export default MainContent;
