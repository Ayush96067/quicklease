function Hero() {
  return (
    <div className="grid min-h-[100vh] grid-rows-2 gap-6 text-center lg:grid-cols-2 lg:grid-rows-2 lg:gap-3">
      <div className="flex items-center justify-center rounded-2xl bg-amber-400 p-7 text-4xl font-bold text-black italic lg:text-6xl">
        "Making borrowing easy, affordable & accessible!"
      </div>
      <div className="hidden items-center justify-center lg:flex">
        <div className="flex h-full w-[50%] items-center justify-center rounded-full bg-white text-[14rem] text-black">
          QL
        </div>
      </div>
      <div className="hidden items-center justify-center p-5 lg:flex">
        <div className="flex h-full w-[50%] items-center justify-center rounded-full bg-white text-[4rem] font-extrabold text-black">
          Borrow what you need <br /> Share what you can
        </div>
      </div>
      <div className="flex items-center justify-center rounded-2xl bg-violet-600 p-7 text-3xl lg:p-5 lg:text-6xl">
        QuickLease was created with a vision to simplify the way people access
        things they need — without the need to buy everything. We believe that
        not every product needs to be owned forever.
      </div>
    </div>
  );
}
export default Hero;
