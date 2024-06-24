import oka from "../assets/OKA.png";
import Flexc from "./Flexc";

export default function Header() {
  return (
    <>
      <header className="flex justify-center items-center fixed top-0 w-full text-center h-[60px] bg-white shadow-md rounded-b-md overflow-hidden text-white">
        <Flexc
          center={true}
          className={`w-[80px] h-full bg-primary pointer-events-none`}
        >
          <img
            src={oka}
            alt="OKA"
            className="w-[60px] print:w-[45px] rounded-xl"
          />
        </Flexc>

        <div className="pembatas w-[1px] h-[80%] bg-gray-200"></div>

        <Flexc
          center={true}
          className={`flex-2 h-full bg-primary tracking-[0.5px] text-[1rem] md:text-[1.2rem]`}
        >
          <p className="px-4">PT OKA PERMATA ABADI</p>
        </Flexc>

        <Flexc center={true} className={`flex-1 h-full bg-primary`}></Flexc>
      </header>
    </>
  );
}
