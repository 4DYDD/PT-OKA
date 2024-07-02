import Flexc from "./Flexc";

function Footer() {
  return (
    <>
      <Flexc
        center={true}
        className={`fixed bottom-0 z-20 w-full bg-primary py-2 text-[0.8rem] text-white`}
      >
        <p>OKA COMPANY</p>
      </Flexc>
    </>
  );
}

export default Footer;
