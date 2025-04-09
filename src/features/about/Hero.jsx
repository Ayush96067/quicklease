function Hero() {
  return (
    <div className="grid min-h-[100vh] grid-cols-2 grid-rows-2">
      <div className="flex items-center justify-center rounded-2xl bg-amber-400 text-6xl font-bold text-black italic">
        "Making borrowing easy, affordable & accessible!"
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-full w-[50%] items-center justify-center rounded-full bg-white text-[14rem] text-black">
          QL
        </div>
      </div>
      <div>Line1 </div>
      <div className="flex items-center justify-center rounded-2xl bg-violet-600 p-10 text-6xl">
        QuickLease was created with a vision to simplify the way people access
        things they need — without the need to buy everything. We believe that
        not every product needs to be owned forever.
      </div>
    </div>
  );
}
export default Hero;
