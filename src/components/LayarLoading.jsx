import React, { useState } from "react";

export default function LayarLoading() {
  return (
    <>
      <div className="kotak--utama fixed left-[50%] top-[50%] z-20 flex h-[110vh] w-[100vw] translate-x-[-50%] translate-y-[-50%] cursor-wait flex-col justify-center transition-all duration-500 ease-in-out">
        <div className="kotak--wan relative flex h-[250px] items-center justify-center overflow-hidden bg-primary md:!justify-start">
          {/* <LOGONYA> */}
          <div className="relative flex w-[200px] items-center justify-center">
            <div className="animate-buletann relative flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full bg-primary text-[1em] md:!animate-buletan">
              <div className="relative h-[5em] w-[5em] rounded-full border-[0.5em] border-white"></div>
              <div className="garis--wan absolute w-[5.15em] bg-primary"></div>
              <div className="garis--tu absolute w-[5.15em] bg-primary"></div>
            </div>
          </div>
          {/* </LOGONYA> */}

          <div className="garis--tri relative hidden w-[4px] rounded-full bg-white md:flex"></div>

          <div className="text--wan relative hidden h-full flex-1 items-center justify-start overflow-hidden text-[3rem] text-white md:!flex">
            <p className="ml-14">PT OKA PERMATA ABADI</p>
          </div>
        </div>
      </div>
    </>
  );
}
