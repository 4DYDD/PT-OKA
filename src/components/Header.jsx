import oka from "../assets/OKA.png";
import Flexc from "./Flexc";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 z-20 flex h-[60px] w-full items-center justify-center overflow-hidden rounded-b-md bg-white text-center text-white shadow-md">
        <Flexc
          center={true}
          className={`pointer-events-none h-full w-[80px] bg-primary`}
        >
          <img
            src={oka}
            alt="OKA"
            className="w-[60px] rounded-xl print:w-[45px]"
          />
        </Flexc>

        <div className="pembatas h-[80%] w-[1px] bg-gray-200"></div>

        <Flexc
          center={true}
          className={`flex-2 h-full bg-primary text-[1rem] tracking-[0.5px] md:text-[1.2rem]`}
        >
          <p className="px-4">PT OKA PERMATA ABADI</p>
        </Flexc>

        <Flexc center={true} className={`h-full flex-1 bg-primary`}></Flexc>
      </header>
    </>
  );
}
