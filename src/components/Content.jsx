import Flexc from "./Flexc";
import Card from "./Card";
import bosQori from "../assets/bosQori.jpg";

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
            font={`text-[0.75rem] md:text-[1rem] text-white print:text-gray-400`}
            bgColor={`bg-sky-600 print:bg-sky-600`}
            header={[
              <>
                <i className="fa-solid fa-users"></i>
              </>,
              <>
                <p>Karyawan</p>
              </>,
            ]}
            rows={[
              [
                <i className="fa-solid fa-mars"></i>,
                <>
                  <div className="text-left text-[1.5em] leading-none">7</div>
                  <div className="text-left text-[0.9em] leading-none">
                    pria
                  </div>
                </>,
              ],
              [
                <i className="fa-solid fa-venus"></i>,
                <>
                  <div className="text-left text-[1.5em] leading-none">0</div>
                  <div className="text-left text-[0.9em] leading-none">
                    wanita
                  </div>
                </>,
              ],
            ]}
          />

          <Card
            font={`text-[0.75rem] md:text-[1rem] text-white print:text-gray-400`}
            bgColor={`bg-yellow-500 print:bg-yellow-500`}
            header={[
              <i className="fa-solid fa-laptop-code"></i>,
              <>
                <p className="leading-none">Projek</p>
              </>,
            ]}
            rows={[
              [
                <i className="leading-none fa-solid fa-square-check"></i>,
                <>
                  <div className="text-left text-[1.5em] leading-none">2</div>
                  <div className="text-left text-[0.9em] leading-none">
                    selesai
                  </div>
                </>,
              ],
              [
                <i className="leading-none fa-solid fa-bars-progress"></i>,
                <>
                  <div className="text-left text-[1.5em] leading-none">1</div>
                  <div className="text-left text-[0.9em] leading-none">
                    kemajuan
                  </div>
                </>,
              ],
            ]}
          />

          <Card
            font={`text-[0.75rem] md:text-[1rem] text-white print:text-gray-400`}
            bgColor={`bg-green-600 print:bg-green-600`}
            header={[
              <i class="fa-solid fa-building text-[1.2em]"></i>,
              <>
                <p className="leading-none">Relasi</p>
                <p className="text-[0.5em]">(fake)</p>
              </>,
            ]}
            rows={[
              [
                <i class="fa-solid fa-tree-city text-[0.8em]"></i>,
                <>
                  <div className="text-left text-[1.5em] leading-none">2</div>
                  <div className="text-left text-[0.9em] leading-none">
                    Cabang <span className="text-[0.9em]">(fake)</span>
                  </div>
                </>,
              ],
              [
                <i class="fa-solid fa-building-shield text-[0.8em]"></i>,
                <>
                  <div className="text-left text-[1.5em] leading-none">4</div>
                  <div className="text-left text-[0.9em] leading-none">
                    Aliansi <span className="text-[0.9em]">(fake)</span>
                  </div>
                </>,
              ],
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
