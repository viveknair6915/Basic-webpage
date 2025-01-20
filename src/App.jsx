import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import MainContent from "./components/MainContent";
import RightPanel from "./components/RightPanel";
import Footer from "./components/Footer";

 const App = () => {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const root = document.documentElement;

      if (width <= 600) root.style.transform = "scale(0.5)";
      else if (width <= 700) root.style.transform = "scale(0.75)";
      else if (width <= 767) root.style.transform = "scale(0.8)";
      else if (width <= 1600) root.style.transform = "scale(0.9)";
      else root.style.transform = "scale(1)";
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.body}>
        <LeftMenu />
        <MainContent />
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    overflow: "hidden",
  },
  body: {
    display: "flex",
    marginTop: "60px",
    flex: 1,
    },
};

export default App;