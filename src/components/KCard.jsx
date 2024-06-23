import Flexc from "./Flexc";

function KCard() {
  return (
    <>
      <div className="flex justify-center items-center text-center h-[180px] rounded overflow-hidden border-[2px] box-border shadow-md border-white bg-green-600">
        {" "}
        <Flexc
          vcenter={true}
          center={true}
          className={`w-[180px] text-white h-full flex-col`}
        >
          <p className="w-full text-[3.5rem]">
            <i className="fa-solid fa-users"></i>
          </p>
          <p className="w-full text-[2rem]">Karyawan</p>
        </Flexc>
        {/* <PEMBATAS> */}
        <div className="w-[2px] h-full bg-white"></div>
        {/* </PEMBATAS> */}
        <Flexc
          className={`min-w-[120px] text-white h-full flex-col rounded overflow-hidden`}
        >
          <Flexc start={true} className={`flex-1 w-full`}>
            <Flexc className={`ml-2 w-[60px] text-[3rem]`}>
              <i className="leading-none fa-solid fa-mars"></i>
            </Flexc>
            <Flexc
              vstart={true}
              className={`min-w-[100px] flex-1 flex-col mx-2 gap-1`}
            >
              <div className="text-left text-[1.5rem] leading-none">7</div>
              <div className="text-left text-[0.9rem] leading-none">pria</div>
            </Flexc>
          </Flexc>
          {/* <PEMBATAS> */}
          <div className="w-full h-[2px] bg-white"></div>
          {/* </PEMBATAS> */}
          <Flexc start={true} className={`flex-1 h-full`}>
            <Flexc className={`ml-2 w-[60px] text-[3rem]`}>
              <i className="fa-solid fa-venus"></i>
            </Flexc>
            <Flexc
              vstart={true}
              className={`min-w-[100px] flex-1 flex-col mx-2 gap-1`}
            >
              <div className="text-left text-[1.5rem] leading-none">0</div>
              <div className="text-left text-[0.9rem] leading-none">wanita</div>
            </Flexc>
          </Flexc>
        </Flexc>
      </div>
    </>
  );
}

export default KCard;
