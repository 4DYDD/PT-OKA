import React, { useState } from "react";

export default function LoadingScreen() {
  return (
    <>
      <div className="kotak--utama fixed left-[50%] top-[50%] z-20 flex h-[110vh] w-[100vw] translate-x-[-50%] translate-y-[-50%] cursor-wait flex-col justify-center transition-all duration-500 ease-in-out">
        <div className="kotak--wan relative bg-primary h-[250px] flex justify-center md:!justify-start items-center overflow-hidden">
          {/* <LOGONYA> */}
          <div className="relative flex items-center justify-center w-[200px]">
            <div class="relative animate-buletann md:!animate-buletan w-[150px] h-[150px] text-[1em] overflow-hidden bg-primary flex justify-center items-center rounded-full">
              <div className="relative rounded-full w-[5em] h-[5em] border-[0.5em] border-white"></div>
              <div className="garis--wan absolute bg-primary w-[5.15em]"></div>
              <div className="garis--tu absolute bg-primary w-[5.15em]"></div>
            </div>
          </div>
          {/* </LOGONYA> */}

          <div className="garis--tri bg-white w-[4px] hidden md:flex relative rounded-full"></div>

          <div className="relative text--wan items-center justify-start hidden flex-1 md:!flex text-[3rem] text-white overflow-hidden h-full">
            <p className="ml-14">PT OKA PERMATA ABADI</p>
          </div>
        </div>
      </div>
    </>
  );
}
