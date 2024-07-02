import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Teskan from "./components/Teskan";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTeskan, setIsTeskan] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 5500);
  //   };
  // }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}

      <Header />

      <br />
      <br />
      <br />
      <br />
      <br />
      {isTeskan && <Teskan />}

      <div className="flex">
        <button
          className="m-auto w-[10rem] rounded bg-blue-600 py-1 text-lg text-white shadow-sm"
          onClick={() => {
            setIsTeskan(!isTeskan);
          }}
        >
          MUNCULKAN TESKAN
        </button>
      </div>

      <Content />

      <Footer />
    </>
  );
}

export default App;
