function HeroSec2() {
  return (
    <div className="mt-10 flex min-h-[100vh] flex-col gap-10 p-2 text-[1.6rem]/9 lg:flex-row lg:items-center lg:p-5 lg:text-5xl/20">
      <div className="rounded-2xl bg-orange-500 p-4 shadow-lg shadow-orange-700 lg:p-20 lg:shadow-xl">
        {/* About */}
        <h1 className="text-5xl font-extrabold tracking-widest lg:text-7xl">
          About Us
        </h1>
        <p>
          Welcome to QuicKLease, your trusted platform for renting and borrowing
          items—making sharing more accessible, affordable, and sustainable!
          Whether you're looking for an item for a short time or have something
          to offer, our mission is to create a community-driven ecosystem that
          values sharing over owning.
        </p>
      </div>
      <div className="rounded-2xl bg-green-700 p-4 shadow-lg shadow-green-700 lg:p-20 lg:shadow-xl">
        {/* Out mission */}
        <h1 className="text-5xl font-extrabold tracking-widest lg:text-7xl">
          Our Mission
        </h1>
        <p>
          At QuicKLease, we believe in building a world where everyone has
          access to the resources they need without the burden of high costs. By
          fostering a spirit of collaboration and sustainability, we aim to: -
          Reduce waste by encouraging reuse of items. - Help individuals save
          money by renting instead of purchasing. - Build a sense of community
          through sharing and supporting one another.
        </p>
      </div>
    </div>
  );
}
export default HeroSec2;
