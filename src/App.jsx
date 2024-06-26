import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setisLoading] = useState(true); // JANGAN LUPA TRUE KAN LAGI...!

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setisLoading(false);
      }, 5500);
    };
  }, []);

  // JANGAN LUPA NYALAKAN LAGI KAN LAGI...!

  return (
    <>
      {isLoading && <LoadingScreen />}

      <Header />

      <Content />

      <Footer />
    </>
  );
}

export default App;
