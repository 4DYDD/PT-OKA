import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    return () => {
      // setTimeout(() => {
      //   setisLoading(false);
      // }, 6000);
    };
  }, []);

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
