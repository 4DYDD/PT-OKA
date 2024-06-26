import React from "react";
import Flexc from "./Flexc";

function Card({ font, bgColor, topHeader, header, rows, flex }) {
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
          className={`w-[180px] h-full flex-col text-[1em] relative group transition-all duration-200 ease-in-out`}
        >
          {topHeader && topHeader}
          <div
            className={`${
              topHeader &&
              "group-hover:scale-0 transition-all duration-200 ease-in-out relative"
            }`}
          >
            <div className="w-full text-[3.5em]">{header.icon}</div>
            <div className="w-full text-[2em]">{header.text}</div>
          </div>
        </Flexc>

        {/* <PEMBATAS> */}
        <div className="w-[2px] h-full bg-white"></div>
        {/* </PEMBATAS> */}

        <Flexc
          className={`w-[200px] md:!max-w-[200px] h-full flex-col rounded overflow-hidden text-[1em] transition-all duration-200 ease-in-out`}
        >
          {rows.map((column, index) => (
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
                {column.icon && (
                  <Flexc
                    className={`min-w-[60px] text-[3em]`}
                    key={`${index}--cicon`}
                  >
                    {column.icon}
                  </Flexc>
                )}

                <Flexc
                  vstart={true}
                  className={`min-w-[100px] max-w-[150px] box-border flex-1 flex-col ms-1 me-2 text-[1em] gap-1`}
                  key={`${index}--ctext`}
                >
                  {column.text}
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
