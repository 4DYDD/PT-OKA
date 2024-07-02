import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setisLoading] = useState(true);
  const [angka, setAngka] = useState(0);

  // useEffect(() => {
  //   return () => {
  //     setTimeout(() => {
  //       setisLoading(false);
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

      <div className="flex">
        <button
          className="w-[3rem] py-1 m-auto text-white bg-blue-600 rounded shadow-sm text-lg"
          onClick={() => {
            setAngka(angka + 1);
          }}
        >
          {angka}
        </button>
      </div>

      <Content />

      <Footer />
    </>
  );
}

export default App;
