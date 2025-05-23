import styled from "styled-components";
import Crousel from "../../ui/Crousel";

const StyledContent = styled.div``;
const StyledHead = styled.h1`
  font-family: "Poppins";
`;
const StyledImageContent = styled.div`
  width: 100%;
`;
const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  box-shadow: 1px 1px 20px 5px #000000;
`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const infos = [
  {
    id: 1,
    title: "Choose from various Categories",
  },
  {
    id: 2,
    title: "Choose from Electronics ",
  },
  {
    id: 3,
    title: "Choose from Vehicles",
  },
  {
    id: 4,
    title: "Choose from Books ",
  },
];

const images = [
  {
    id: 1,
    imgsrc: "./img1.jpg",
  },
  {
    id: 2,
    imgsrc: "./img2.jpg",
  },
  {
    id: 3,
    imgsrc: "./img3.jpg",
  },
  {
    id: 4,
    imgsrc: "./img4.jpg",
  },
];

// 1e0034

function LandingDisplay() {
  return (
    <div className="relative grid min-h-[100vh] grid-rows-[10vh_auto] md:grid-rows-[20vh_auto] md:rounded-4xl md:rounded-l-full lg:p-10">
      {/* relative is given to main class */}
      <div></div>
      <div className="grid h-full grid-cols-1 rounded-4xl bg-[#000] md:grid-cols-2 md:rounded-l-full md:rounded-r-[10px]">
        <div className="flex items-center justify-center p-2 lg:p-10">
          <Crousel
            responsive={responsive}
            removeArrowOnDeviceType={"superLargeDesktop"}
            itemClass="itemClass2"
            className="uppercase md:p-10"
          >
            {infos.map((info) => (
              <StyledContent key={info.id} className="md:flex">
                <StyledHead className="text-3xl font-extrabold text-[#bfff00] md:text-5xl lg:text-8xl">
                  {info.title}
                </StyledHead>
              </StyledContent>
            ))}
          </Crousel>
        </div>

        <div className="flex items-center justify-center">
          <Crousel
            direction="left"
            responsive={responsive}
            removeArrowOnDeviceType={"superLargeDesktop"}
            itemClass={"itemClass3"}
            className=""
          >
            {images.map((img) => (
              <StyledImageContent
                className="rounded-full bg-[#bfff00] p-5 md:p-10"
                key={img.id}
              >
                <StyledImage
                  className="h-[50vh] rounded-4xl lg:h-[80vh]"
                  src={img.imgsrc}
                  alt=""
                />
              </StyledImageContent>
            ))}
          </Crousel>
        </div>
      </div>
    </div>
  );
}
export default LandingDisplay;
