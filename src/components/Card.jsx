import React from "react";
import Flexc from "./Flexc";

function Card({ font, bgColor, header, rows, flex }) {
  return (
    <>
      <Flexc
        className={`text-center 
        ${flex ? flex : ``}
        ${font ? font : `text-[1rem] text-white`} 
        h-[130px] md:h-[180px] rounded overflow-hidden box-border shadow-md 
        ${bgColor ? bgColor : `bg-emerald-600`}
        `}
      >
        {/* ------------------------------- */}
        {/* ------------------------------- */}
        {/* ------------------------------- */}
        <Flexc
          vcenter={true}
          center={true}
          className={`w-[180px] h-full flex-col text-[1em]`}
        >
          <p className="w-full text-[3.5em]">{header[0]}</p>
          <p className="w-full text-[2em]">{header[1]}</p>
        </Flexc>

        {/* <PEMBATAS> */}
        <div className="w-[2px] h-full bg-white"></div>
        {/* </PEMBATAS> */}

        <Flexc
          className={`min-w-[120px] h-full flex-col rounded overflow-hidden text-[1em]`}
        >
          {rows.map((row, index) => (
            <React.Fragment key={index}>
              {/* <PEMBATAS> */}
              {index !== 0 && (
                <div
                  className="w-full h-[2px] bg-white"
                  key={`${index}--garis`}
                ></div>
              )}
              {/* </PEMBATAS> */}

              <Flexc
                start={true}
                className={`flex-1 w-full text-[1em]`}
                key={`${index}--cwrap`}
              >
                {row[1] && (
                  <Flexc
                    className={`min-w-[60px] px-3 text-[3em]`}
                    key={`${index}--cicon`}
                  >
                    {row[0]}
                  </Flexc>
                )}

                <Flexc
                  vstart={true}
                  className={`min-w-[100px] flex-1 flex-col mx-2 gap-1 text-[1em]`}
                  key={`${index}--ctext`}
                >
                  {row[1] || row[0]}
                </Flexc>
              </Flexc>
            </React.Fragment>
          ))}
        </Flexc>
        {/* ------------------------------- */}
        {/* ------------------------------- */}
        {/* ------------------------------- */}
      </Flexc>
    </>
  );
}

export default Card;
