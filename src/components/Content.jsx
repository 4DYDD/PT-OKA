import Flexc from "./Flexc";
import Card from "./Card";
import bosQori from "../assets/bosQori.jpg";
import Andria from "../assets/Andria.jpg";
import Lana from "../assets/Lana.png";
import Linggar from "../assets/Linggar.jpg";
import Adit from "../assets/Adit.png";

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
              className={`w-[450px] bg-red-500 rounded-md shadow overflow-hidden group cursor-pointer`}
            >
              <div className="flex-1 basis-[300px] text-center text-white print:text-gray-400">
                <i class="fa-solid fa-user-secret text-[5rem]"></i>
                <p className="text-[1.5rem]">Qori</p>
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
            font={`text-[0.8rem] md:text-[1rem] text-white print:text-gray-400`}
            bgColor={`bg-sky-600 print:bg-sky-600`}
            topHeader={
              <>
                <Flexc
                  start={true}
                  style={{ scrollBehavior: "smooth" }}
                  className="absolute bg-red-400 w-full overflow-auto h-full left-[-200px] group-hover:left-[0px] transition-all duration-200 ease-in-out"
                >
                  <Flexc className={`relative h-full`}>
                    <Flexc
                      id={`Linggar`}
                      vend={true}
                      className={`bg-[url(${Linggar})] bg-no-repeat bg-cover bg-[center_-50px] h-full w-[150px] md:w-[180px]`}
                    >
                      <a href="#Andria">
                        <div className="w-[180px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] leading-9">
                          Linggar
                        </div>
                      </a>
                    </Flexc>
                    <Flexc
                      id={`Andria`}
                      vend={true}
                      className={`bg-[url(${Andria})] bg-no-repeat bg-cover h-full w-[150px] md:w-[180px]`}
                    >
                      <a href="#Lana">
                        <div className="w-[180px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] leading-9">
                          Andria
                        </div>
                      </a>
                    </Flexc>
                    <Flexc
                      id={`Lana`}
                      vend={true}
                      className={`bg-[url(${Lana})] bg-no-repeat bg-cover h-full w-[150px] md:w-[180px]`}
                    >
                      <a href="#Adit">
                        <div className="w-[180px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] leading-9">
                          Lana
                        </div>
                      </a>
                    </Flexc>
                    <Flexc
                      id={`Adit`}
                      vend={true}
                      className={`bg-[url(${Adit})] bg-no-repeat bg-[cover] h-full w-[150px] md:w-[180px]`}
                    >
                      <a href="#Linggar">
                        <div className="w-[180px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] leading-9">
                          Adit
                        </div>
                      </a>
                    </Flexc>
                  </Flexc>
                </Flexc>
              </>
            }
            header={{
              icon: (
                <>
                  <i className="fa-solid fa-users"></i>
                </>
              ),
              text: (
                <>
                  <p className="text-[0.8em]">Karyawan</p>
                </>
              ),
            }}
            rows={[
              {
                icon: <i className="fa-solid fa-mars"></i>,
                text: (
                  <>
                    <p className="text-left text-[1.5em] leading-none">7</p>
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
            font={`text-[0.8rem] md:text-[1rem] text-white print:text-gray-400`}
            bgColor={`bg-yellow-500 print:bg-yellow-500`}
            header={{
              icon: <i className="fa-solid fa-laptop-code"></i>,
              text: (
                <>
                  <p className="leading-none text-[0.8em]">Projek</p>
                </>
              ),
            }}
            rows={[
              {
                icon: <i className="leading-none fa-solid fa-square-check"></i>,
                text: (
                  <>
                    <div className="text-left text-[1.5em] leading-none">2</div>
                    <div className="text-left text-[0.9em] leading-none">
                      Selesai
                    </div>
                  </>
                ),
              },
              {
                icon: (
                  <i className="leading-none fa-solid fa-bars-progress"></i>
                ),
                text: (
                  <>
                    <div className="text-left text-[1.5em] leading-none">1</div>
                    <div className="text-left text-[0.9em] leading-none">
                      Kemajuan
                    </div>
                  </>
                ),
              },
            ]}
          />

          <Card
            font={`text-[0.8rem] md:text-[1rem] text-white print:text-gray-400`}
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
