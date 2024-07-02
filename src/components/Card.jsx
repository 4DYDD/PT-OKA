import React from "react";
import Flexc from "./Flexc";

function Card({ font, bgColor, topHeader, header, rows = [] }) {
  rows =
    rows.length < 1
      ? [
          {
            icon: (
              <>
                <i className="fa-solid fa-icons text-[0.9em] md:text-[0.9em]"></i>
              </>
            ),
            text: (
              <>
                <div className="text-left text-[1.5em] leading-none md:text-[1.5em]">
                  2
                </div>
                <div className="text-left text-[0.9em] leading-none md:text-[0.9em]">
                  text here
                </div>
              </>
            ),
          },
          {
            icon: (
              <i className="fa-solid fa-icons text-[0.9em] md:text-[0.9em]"></i>
            ),
            text: (
              <>
                <div className="text-left text-[1.5em] leading-none md:text-[1.5em]">
                  4
                </div>
                <div className="text-left text-[0.9em] leading-none md:text-[0.9em]">
                  text here
                </div>
              </>
            ),
          },
        ]
      : rows;
  return (
    <>
      <Flexc
        className={`text-center ${font ? font : `text-[0.75rem] text-white md:text-[1rem]`} box-border h-[130px] overflow-hidden rounded shadow-md md:h-[180px] ${bgColor ? bgColor : `bg-emerald-600`} `}
      >
        {/* ------------------------------- */}
        {/* ------------------------------- */}
        {/* ------------------------------- */}
        <Flexc
          vcenter={true}
          center={true}
          className={`group relative h-full w-[180px] flex-col text-[1em] transition-all duration-200 ease-in-out md:w-[180px]`}
        >
          {topHeader && topHeader}
          <div
            className={`${
              topHeader && "relative transition-all duration-200 ease-in-out"
            }`}
          >
            <Flexc className="w-full text-[3.5em]">
              {header ? (
                header.icon
              ) : (
                <i className="fa-solid fa-icons text-[1.2em]"></i>
              )}
            </Flexc>
            <div className="w-full text-[2em]">
              {header ? header.text : <p className="text-[0.8em]">Text Here</p>}
            </div>
          </div>
        </Flexc>

        {/* <PEMBATAS> */}
        <div className="h-full w-[2px] bg-white"></div>
        {/* </PEMBATAS> */}

        <Flexc
          start={true}
          className={`h-full w-[200px] flex-col overflow-y-auto overflow-x-hidden rounded text-[1em] text-inherit transition-all duration-200 ease-in-out md:!max-w-[200px] md:text-[1em]`}
        >
          {rows.map((column, index) => (
            <React.Fragment key={index}>
              {/* <PEMBATAS> */}
              {index !== 0 && (
                <div
                  className="h-[1.5px] w-full bg-white"
                  key={`${index}--garis`}
                ></div>
              )}
              {/* </PEMBATAS> */}

              <Flexc
                start={true}
                className={`w-full flex-1 text-[1em]`}
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
                  className={`me-2 ms-1 box-border min-w-[100px] max-w-[150px] flex-1 flex-col gap-1 align-middle text-[1em]`}
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
