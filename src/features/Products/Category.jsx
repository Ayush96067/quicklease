import { NavLink } from "react-router-dom";
import Crousel from "../../ui/Crousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const categories = [
  {
    id: 1,
    title: "electronics",
    imageSrc: "/img1.jpg",
  },
  {
    id: 2,
    title: "books",
    imageSrc: "/img4.jpg",
  },
  {
    id: 3,
    title: "vechicles",
    imageSrc: "/img3.jpg",
  },
  {
    id: 4,
    title: "accomodation",
    imageSrc: "/img2.jpg",
  },
  {
    id: 5,
    title: "home-decore",
    imageSrc: "/img1.jpg",
  },
  {
    id: 6,
    title: "Clothes",
    imageSrc: "/img2.jpg",
  },
];

function Card({ category }) {
  return (
    <NavLink
      to={`category/${category.title}`}
      className="group relative h-full w-full cursor-pointer transition-all duration-700"
    >
      <div className="absolute inset-0 z-50 flex h-full w-full items-center justify-center overflow-hidden backdrop-blur-[1px] backdrop-brightness-75 transition-all duration-700 lg:translate-y-[40rem] lg:backdrop-blur-md lg:group-hover:translate-y-0">
        <h1 className="text-4xl text-[white] md:text-7xl lg:text-7xl">
          {category.title}
        </h1>
      </div>
      <img
        src={category.imageSrc}
        className="mb-10 h-[20rem] w-full rounded-4xl object-cover md:h-[28rem] lg:h-[40rem]"
      />
    </NavLink>
  );
}

function Category() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col justify-center gap-[3rem] p-2">
      <h1 className="text-center text-3xl font-semibold md:text-5xl lg:text-7xl">
        Category
      </h1>
      <Crousel
        className="w-full"
        responsive={responsive}
        autoPlay={false}
        showDots={true}
        dotListClass="dotListClass1"
      >
        {categories.map((category, i) => (
          <div key={i} className="flex w-full gap-10 overflow-hidden p-[2rem]">
            <Card category={category} key={i} />
          </div>
        ))}
      </Crousel>
    </div>
  );
}

export default Category;
