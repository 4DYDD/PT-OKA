import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import LayarLoading from "./components/LayarLoading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   return () => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 4500);
  //   };
  // }, []);

  return (
    <>
      {isLoading && <LayarLoading />}

      <Header />

      <Content />

      <Footer />
    </>
  );
}

export default App;
