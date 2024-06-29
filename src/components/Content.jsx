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
      <main className="w-full min-h-[100vh]">
        <div className="w-full h-[80px]"></div>
        <div className="md:text-[1.3rem] box-border w-full md:px-6 px-4 py-2 leading-none text-teal-700 text-start">
          Dashboard :
        </div>
        <Flexc
          astart={true}
          className={`h-full w-full gap-5 flex-wrap px-5 border-white border-t-teal-700 border-[2px] rounded-t-[3%] pt-5 box-border`}
        >
          {/* ----------------- */}
          {/* ----------------- */}
          {/* ----------------- */}
          <Flexc className={`w-full`}>
            <Flexc
              between={true}
              className={`select-none w-[450px] bg-red-500 rounded-md shadow overflow-hidden group cursor-pointer`}
            >
              <div className="flex-1 basis-[300px] text-center text-white print:text-gray-400">
                <i className="fa-solid fa-user-secret text-[5rem]"></i>
                <p className="text-[1.5rem]">Qor</p>
                <p className="text-[1rem] leading-none">{`{ Boss }`}</p>
              </div>
              <div className="w-0 overflow-hidden transition-all duration-300 ease-in-out bg-red-400 group-hover:w-full">
                <img
                  className="w-[150%] h-[200px] object-cover object-top pointer-events-none"
                  style={{ objectPosition: `center 30%` }}
                  src={bosQori}
                  alt="bosQori"
                />
              </div>
            </Flexc>
          </Flexc>

          <Card
            font={`text-[0.75rem] md:text-[1rem] text-white print:text-gray-400`}
            bgColor={`bg-sky-600 print:bg-sky-600`}
            topHeader={
              <>
                <Flexc className="absolute bg-red-400 w-full z-[2] h-full left-[-200px] group-hover:left-[0px] transition-all duration-200 ease-in-out">
                  <Flexc
                    start={true}
                    style={{ scrollBehavior: "smooth" }}
                    className={`relative w-full h-full overflow-auto`}
                  >
                    <Flexc className={`relative h-full`}>
                      <Flexc
                        onClick={() => {
                          window.location.href = "#Andria";
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
                        <div className="select-none flex-1 bg-gradient-to-t from-[rgba(0,0,0,0.8)] leading-9">
                          Ling
                        </div>
                      </Flexc>
                      <Flexc
                        onClick={() => {
                          window.location.href = "#Maou";
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
                        <div className="select-none flex-1 bg-gradient-to-t from-[rgba(0,0,0,0.8)] leading-9">
                          An
                        </div>
                      </Flexc>
                      <Flexc
                        onClick={() => {
                          window.location.href = "#Adet";
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
                        <div className="select-none flex-1 bg-gradient-to-t from-[rgba(0,0,0,0.8)] leading-9">
                          Lan
                        </div>
                      </Flexc>
                      <Flexc
                        onClick={() => {
                          window.location.href = "#Linggar";
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
                        <div className="select-none flex-1 bg-gradient-to-t from-[rgba(0,0,0,0.8)] leading-9">
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
                  <div className="relative h-[1em] text-[1em] rounded-md m-auto">
                    <div className="relative flex items-center justify-center w-full h-full rounded-md">
                      <div className="relative text-white transition-all duration-200 ease-in-out bg-red-400 group-hover:opacity-50">
                        <div className="absolute z-[3] group-hover:opacity-0 opacity-100 left-[-20px] text-[0.7em] transition-all duration-300 delay-150 ease-in-out top-[50%] translate-x-[-50%] group-hover:text-[0em] translate-y-[-50%]">
                          <i className="text-gray-200 fa-solid fa-user drop-shadow-md"></i>
                        </div>
                        <div className="absolute z-[4] group-hover:opacity-0 opacity-100 left-[20px] text-[0.7em] transition-all duration-300 delay-150 ease-in-out top-[50%] translate-x-[-50%] group-hover:text-[0em] translate-y-[-50%]">
                          <i className="text-gray-200 fa-solid fa-user drop-shadow-md"></i>
                        </div>
                        <div className="absolute z-[5] group-hover:opacity-50 group-hover:text-[0em] top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] transition-all duration-300 ease-in-out">
                          <i className="fa-solid fa-user drop-shadow-md"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ),
              text: (
                <>
                  <p className="text-[0.8em] group-hover:opacity-0 opacity-100 group-hover:text-[0em] delay-200 transition-all duration-200 ease-out">
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
                    <p className="text-left text-[0.9em] leading-none">Pria</p>
                  </>
                ),
              },
              {
                icon: <i className="fa-solid fa-venus"></i>,
                text: (
                  <>
                    <div className="text-left text-[1.5em] leading-none">0</div>
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
                <div className="flex justify-center items-center relative group text-[0.33em] w-full h-[4em] bg-inherit">
                  <div className="text-[2.8em] group-hover:text-yellow-100 group-hover:scale-105 scale-90 group-hover:rotate-[72.5deg] group-hover:top-[35%] md:group-hover:top-[20%] absolute transition-all duration-200 ease-in-out top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-[5]">
                    <i className="fa-solid fa-star drop-shadow-md"></i>
                  </div>
                  <div className="text-[2.1em] group-hover:text-yellow-200 group-hover:scale-105 scale-90 group-hover:rotate-[-72.5deg] group-hover:top-7 group-hover:left-[15%] delay-100 absolute transition-all duration-200 ease-in-out top-[40%] left-[20%] translate-x-[-50%] translate-y-[-50%] text-gray-200 z-[4]">
                    <i className="fa-solid fa-star drop-shadow-sm"></i>
                  </div>
                  <div className="text-[2.1em] group-hover:text-yellow-200 group-hover:scale-105 scale-90 group-hover:rotate-[72.5deg] group-hover:top-7 group-hover:left-[85%] delay-100 absolute transition-all duration-200 ease-in-out top-[40%] left-[80%] translate-x-[-50%] translate-y-[-50%] text-gray-200 z-[3]">
                    <i className="fa-solid fa-star drop-shadow-sm"></i>
                  </div>
                  <div className="text-[1.6em] absolute group-hover:text-yellow-300 group-hover:scale-105 group-hover:rotate-[-72.5deg] scale-0 group-hover:left-[-10%] group-hover:top-[55%] delay-200 transition-all duration-200 ease-in-out top-[30%] left-[0%] translate-x-[-50%] translate-y-[-50%] text-gray-300 z-[2]">
                    <i className="fa-solid fa-star drop-shadow-sm"></i>
                  </div>
                  <div className="text-[1.6em] absolute group-hover:text-yellow-300 group-hover:scale-105 group-hover:rotate-[72.5deg] scale-0 group-hover:left-[110%] group-hover:top-[55%] delay-200 transition-all duration-200 ease-in-out top-[30%] left-[100%] translate-x-[-50%] translate-y-[-50%] text-gray-300 z-[1]">
                    <i className="fa-solid fa-star drop-shadow-sm"></i>
                  </div>
                </div>
              ),
              text: (
                <>
                  <p className="leading-none text-[0.8em]">Penilaian</p>
                </>
              ),
            }}
            rows={[
              {
                icon: (
                  <div className="relative flex items-center justify-center w-full h-[50px]">
                    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full flex justify-center items-center">
                      <i className="fa-solid fa-star text-[0.95em]">
                        <Flexc>
                          <i className="fa-solid fa-circle-plus text-[0.4em] absolute left-[50%] top-[52%] translate-x-[-50%] translate-y-[-50%] text-yellow-500"></i>
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
                  <div className="relative flex items-center justify-center w-full h-[50px]">
                    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full flex justify-center items-center">
                      <i className="fa-solid fa-star text-[0.95em]">
                        <Flexc>
                          <i className="fa-solid fa-chart-simple text-[0.4em] absolute left-[50%] top-[52%] translate-x-[-50%] translate-y-[-50%] text-yellow-500"></i>
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
                  <p className="leading-none text-[0.8em]">Relasi</p>
                  <p className="text-[0.5em]">(fake)</p>
                </>
              ),
            }}
            rows={[
              {
                icon: <i className="fa-solid fa-tree-city text-[0.8em]"></i>,
                text: (
                  <>
                    <div className="text-left text-[1.5em] leading-none">2</div>
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
                    <div className="text-left text-[1.5em] leading-none">4</div>
                    <div className="text-left text-[0.9em] leading-none">
                      Aliansi <span className="text-[0.9em]">(fake)</span>
                    </div>
                  </>
                ),
              },
            ]}
          />
          {/* ----------------- */}
          {/* ----------------- */}
          {/* ----------------- */}
        </Flexc>
        <div className="w-full h-[80px]"></div>
      </main>
    </>
  );
}

export default Content;
