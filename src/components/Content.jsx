import Flexc from "./Flexc";
import Card from "./Card";
import bosQori from "../assets/bosQori.jpg";
import Andria from "../assets/Andria.jpg";
import Maou from "../assets/Maou.jpg";
import Linggar from "../assets/Linggar.jpg";
import Adet from "../assets/Adet.jpg";

function Content() {
  return (
    <>
      <main className="min-h-[100vh] w-full">
        <div className="h-[80px] w-full"></div>
        <div className="box-border w-full px-4 py-2 text-start leading-none text-teal-700 md:px-6 md:text-[1.3rem]">
          Dashboard :
        </div>
        <Flexc
          astart={true}
          className={`box-border h-full w-full flex-wrap gap-5 rounded-t-[3%] border-[2px] border-white border-t-teal-700 px-3`}
        >
          {/* ----------------- */}
          {/* ----------------- */}
          {/* ----------------- */}
          <Flexc
            between={true}
            className={`sticky top-14 z-10 w-full flex-col overflow-hidden rounded-b-sm rounded-t-md bg-white py-3 sm:rounded-t-3xl`}
          >
            <Flexc
              between={true}
              className={`group w-[100%] cursor-pointer select-none overflow-hidden rounded-md bg-red-500 shadow md:w-[450px]`}
            >
              <div className="flex-1 basis-[300px] text-center text-white print:text-gray-400">
                <i className="fa-solid fa-user-secret text-[5rem]"></i>
                <p className="text-[1.5rem]">Qor</p>
                <p className="text-[1rem] leading-none">{`{ Boss }`}</p>
              </div>
              <div className="w-0 overflow-hidden transition-all duration-300 ease-in-out bg-red-400 group-hover:w-full">
                <img
                  className="pointer-events-none h-[200px] w-[150%] object-cover object-top"
                  style={{ objectPosition: `center 30%` }}
                  src={bosQori}
                  alt="bosQori"
                />
              </div>
            </Flexc>
          </Flexc>

          <Flexc className={`w-full flex-wrap gap-4 px-2`}>
            <Card
              font={`text-[0.75rem] md:text-[1rem] text-white print:text-gray-400`}
              bgColor={`bg-sky-600 print:bg-sky-600`}
              topHeader={
                <>
                  <Flexc className="absolute left-[-200px] z-[2] h-full w-full bg-red-400 transition-all duration-200 ease-in-out group-hover:left-[0px]">
                    <Flexc
                      start={true}
                      style={{ scrollBehavior: "smooth" }}
                      className={`relative h-full w-full overflow-auto`}
                    >
                      <Flexc className={`relative h-full`}>
                        <Flexc
                          onClick={() => {
                            window.location.href = "#Andria";
                            scrollToElement("Andria");
                          }}
                          id={`Linggar`}
                          vend={true}
                          style={{
                            background: `url(${Linggar}) no-repeat`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center -40px`,
                          }}
                          className={`h-full w-[150px] md:w-[180px]`}
                        >
                          <div className="flex-1 select-none bg-gradient-to-t from-[rgba(0,0,0,0.8)] leading-9">
                            Ling
                          </div>
                        </Flexc>
                        <Flexc
                          onClick={() => {
                            window.location.href = "#Maou";
                            scrollToElement("Maou");
                          }}
                          id={`Andria`}
                          vend={true}
                          style={{
                            background: `url(${Andria}) no-repeat`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center 0px`,
                          }}
                          className={`h-full w-[150px] md:w-[180px]`}
                        >
                          <div className="flex-1 select-none bg-gradient-to-t from-[rgba(0,0,0,0.8)] leading-9">
                            An
                          </div>
                        </Flexc>
                        <Flexc
                          onClick={() => {
                            window.location.href = "#Adet";
                            scrollToElement("Adet");
                          }}
                          id={`Maou`}
                          vend={true}
                          style={{
                            background: `url(${Maou}) no-repeat`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center -30px`,
                          }}
                          className={`h-full w-[150px] md:w-[180px]`}
                        >
                          <div className="flex-1 select-none bg-gradient-to-t from-[rgba(0,0,0,0.8)] leading-9">
                            Lan
                          </div>
                        </Flexc>
                        <Flexc
                          onClick={() => {
                            window.location.href = "#Linggar";
                            scrollToElement("Linggar");
                          }}
                          id={`Adet`}
                          vend={true}
                          style={{
                            background: `url(${Adet}) no-repeat`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center -20px`,
                          }}
                          className={`h-full w-[150px] md:w-[180px]`}
                        >
                          <div className="flex-1 select-none bg-gradient-to-t from-[rgba(0,0,0,0.8)] leading-9">
                            Dit
                          </div>
                        </Flexc>
                      </Flexc>
                    </Flexc>
                  </Flexc>
                </>
              }
              header={{
                icon: (
                  <>
                    <div className="relative m-auto h-[1em] rounded-md text-[1em]">
                      <div className="relative flex items-center justify-center w-full h-full rounded-md">
                        <div className="relative text-white transition-all duration-200 ease-in-out bg-red-400 group-hover:opacity-50">
                          <div className="absolute left-[-20px] top-[50%] z-[3] translate-x-[-50%] translate-y-[-50%] text-[0.7em] opacity-100 transition-all delay-150 duration-300 ease-in-out group-hover:text-[0em] group-hover:opacity-0">
                            <i className="text-gray-200 fa-solid fa-user drop-shadow-md"></i>
                          </div>
                          <div className="absolute left-[20px] top-[50%] z-[4] translate-x-[-50%] translate-y-[-50%] text-[0.7em] opacity-100 transition-all delay-150 duration-300 ease-in-out group-hover:text-[0em] group-hover:opacity-0">
                            <i className="text-gray-200 fa-solid fa-user drop-shadow-md"></i>
                          </div>
                          <div className="absolute left-[50%] top-[50%] z-[5] translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in-out group-hover:text-[0em] group-hover:opacity-50">
                            <i className="fa-solid fa-user drop-shadow-md"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ),
                text: (
                  <>
                    <p className="text-[0.8em] opacity-100 transition-all delay-200 duration-200 ease-out group-hover:text-[0em] group-hover:opacity-0">
                      Karyawan
                    </p>
                  </>
                ),
              }}
              rows={[
                {
                  icon: <i className="fa-solid fa-mars"></i>,
                  text: (
                    <>
                      <p className="text-left text-[1.5em] leading-none">6</p>
                      <p className="text-left text-[0.9em] leading-none">
                        Pria
                      </p>
                    </>
                  ),
                },
                {
                  icon: <i className="fa-solid fa-venus"></i>,
                  text: (
                    <>
                      <div className="text-left text-[1.5em] leading-none">
                        0
                      </div>
                      <div className="text-left text-[0.9em] leading-none">
                        Wanita
                      </div>
                    </>
                  ),
                },
              ]}
            />

            <Card
              font={`text-[0.75rem] md:text-[1rem] text-white print:text-gray-400`}
              bgColor={`bg-yellow-500 print:bg-yellow-500`}
              header={{
                icon: (
                  <div className="group relative flex h-[4em] w-full items-center justify-center bg-inherit text-[0.33em]">
                    <div className="absolute left-[50%] top-[50%] z-[5] translate-x-[-50%] translate-y-[-50%] scale-90 text-[2.8em] text-white transition-all duration-200 ease-in-out group-hover:top-[35%] group-hover:rotate-[72.5deg] group-hover:scale-105 group-hover:text-yellow-100 md:group-hover:top-[20%]">
                      <i className="fa-solid fa-star drop-shadow-md"></i>
                    </div>
                    <div className="absolute left-[20%] top-[40%] z-[4] translate-x-[-50%] translate-y-[-50%] scale-90 text-[2.1em] text-gray-200 transition-all delay-100 duration-200 ease-in-out group-hover:left-[15%] group-hover:top-7 group-hover:rotate-[-72.5deg] group-hover:scale-105 group-hover:text-yellow-200">
                      <i className="fa-solid fa-star drop-shadow-sm"></i>
                    </div>
                    <div className="absolute left-[80%] top-[40%] z-[3] translate-x-[-50%] translate-y-[-50%] scale-90 text-[2.1em] text-gray-200 transition-all delay-100 duration-200 ease-in-out group-hover:left-[85%] group-hover:top-7 group-hover:rotate-[72.5deg] group-hover:scale-105 group-hover:text-yellow-200">
                      <i className="fa-solid fa-star drop-shadow-sm"></i>
                    </div>
                    <div className="absolute left-[0%] top-[30%] z-[2] translate-x-[-50%] translate-y-[-50%] scale-0 text-[1.6em] text-gray-300 transition-all delay-200 duration-200 ease-in-out group-hover:left-[-10%] group-hover:top-[55%] group-hover:rotate-[-72.5deg] group-hover:scale-105 group-hover:text-yellow-300">
                      <i className="fa-solid fa-star drop-shadow-sm"></i>
                    </div>
                    <div className="absolute left-[100%] top-[30%] z-[1] translate-x-[-50%] translate-y-[-50%] scale-0 text-[1.6em] text-gray-300 transition-all delay-200 duration-200 ease-in-out group-hover:left-[110%] group-hover:top-[55%] group-hover:rotate-[72.5deg] group-hover:scale-105 group-hover:text-yellow-300">
                      <i className="fa-solid fa-star drop-shadow-sm"></i>
                    </div>
                  </div>
                ),
                text: (
                  <>
                    <p className="text-[0.8em] leading-none">Penilaian</p>
                  </>
                ),
              }}
              rows={[
                {
                  icon: (
                    <div className="relative flex h-[50px] w-full items-center justify-center">
                      <div className="absolute left-[50%] top-[50%] flex h-full w-full translate-x-[-50%] translate-y-[-50%] items-center justify-center">
                        <i className="fa-solid fa-star text-[1em]">
                          <Flexc>
                            <i className="fa-solid fa-circle-plus absolute left-[50%] top-[54%] translate-x-[-50%] translate-y-[-50%] text-[0.4em] text-yellow-500"></i>
                          </Flexc>
                        </i>
                      </div>
                    </div>
                  ),
                  text: (
                    <>
                      <div className="text-left text-[1.5em] leading-none">
                        0.006k+
                      </div>
                      <div className="text-left text-[0.9em] leading-none">
                        jumlah penilaian
                      </div>
                    </>
                  ),
                },
                {
                  icon: (
                    <div className="relative flex h-[50px] w-full items-center justify-center">
                      <div className="absolute left-[50%] top-[50%] flex h-full w-full translate-x-[-50%] translate-y-[-50%] items-center justify-center">
                        <i className="fa-solid fa-star text-[1em]">
                          <Flexc>
                            <i className="fa-solid fa-chart-simple absolute left-[50%] top-[54%] translate-x-[-50%] translate-y-[-50%] text-[0.4em] text-yellow-500"></i>
                          </Flexc>
                        </i>
                      </div>
                    </div>
                  ),
                  text: (
                    <>
                      <div className="text-left text-[1.5em] leading-none">
                        +0.006k
                      </div>
                      <div className="text-left text-[0.9em] leading-none">
                        trend penilaian
                      </div>
                    </>
                  ),
                },
              ]}
            />

            <Card
              font={`text-[0.75rem] md:text-[1rem] text-white print:text-gray-400`}
              bgColor={`bg-green-600 print:bg-green-600`}
              header={{
                icon: <i className="fa-solid fa-building text-[1.2em]"></i>,
                text: (
                  <>
                    <p className="text-[0.8em] leading-none">Relasi</p>
                    <p className="text-[0.5em]">(fake)</p>
                  </>
                ),
              }}
              rows={[
                {
                  icon: <i className="fa-solid fa-tree-city text-[0.8em]"></i>,
                  text: (
                    <>
                      <div className="text-left text-[1.5em] leading-none">
                        2
                      </div>
                      <div className="text-left text-[0.9em] leading-none">
                        Cabang <span className="text-[0.9em]">(fake)</span>
                      </div>
                    </>
                  ),
                },
                {
                  icon: (
                    <i className="fa-solid fa-building-shield text-[0.8em]"></i>
                  ),
                  text: (
                    <>
                      <div className="text-left text-[1.5em] leading-none">
                        4
                      </div>
                      <div className="text-left text-[0.9em] leading-none">
                        Aliansi <span className="text-[0.9em]">(fake)</span>
                      </div>
                    </>
                  ),
                },
              ]}
            />
          </Flexc>

          {/* ----------------- */}
          {/* ----------------- */}
          {/* ----------------- */}
        </Flexc>
        <div className="h-[80px] w-full"></div>
      </main>
    </>
  );
}

export default Content;
