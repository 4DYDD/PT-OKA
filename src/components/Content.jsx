function Content({ children }) {
  return (
    <>
      <main className="w-full min-h-[100vh]">
        <div className="w-full h-[80px]"></div>
        <div className="md:text-[1.3rem] box-border w-full md:px-6 px-4 py-2 leading-none text-teal-700 text-start">
          Dashboard :
        </div>
        {children}
        <div className="w-full h-[80px]"></div>
      </main>
    </>
  );
}

export default Content;
