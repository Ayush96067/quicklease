import { BiUser } from "react-icons/bi";

import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { StyledContainer } from "../../ui/StyledContainer";
import Crousel from "../../ui/Crousel";

const infoUser = [
  {
    id: 1,
    name: "Joe",
    description:
      "QuickLease helped me borrow a DSLR for my trip. Super easy and cost-effective!",
  },
  {
    id: 2,
    name: "Tristin",
    description:
      "I love sharing tools I rarely use. It’s a great way to help others!",
  },
  {
    id: 3,
    name: "Jhon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, inventore?",
  },
  {
    id: 4,
    name: "Kamlesh",
    description:
      "I get tobacco packets easily that gives me Cancer. Thank you QuickLease",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const StyledDiv = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
const Stylehead = styled.h1`
  position: relative;
`;

function Testimonials() {
  const { ref: aboutSecRef, inView: aboutSecView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <StyledContainer
      ref={aboutSecRef}
      className={` ${aboutSecView ? "translate-y-0 opacity-100 blur-none" : "translate-y-[60px] opacity-0 blur-3xl"} flex min-h-fit w-full flex-col items-center justify-center gap-[4rem]`}
    >
      <Stylehead className="text-2xl md:text-4xl lg:text-6xl">
        What our users say
      </Stylehead>

      <Crousel itemClass={"itemClass"}>
        {infoUser.map((info, index) => (
          <StyledDiv className="" key={index}>
            <BiUser className="self-center rounded-3xl border text-5xl lg:text-8xl" />
            <h1 className="text-4xl lg:text-6xl">{info.name}</h1>
            <p className="text-base lg:text-3xl">{info.description}</p>
          </StyledDiv>
        ))}
      </Crousel>
    </StyledContainer>
  );
}
export default Testimonials;

{
  /* <Carousel
        additionalTransfrom={0}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite
        autoPlay={true}
        autoPlaySpeed={1500}
        focusOnSelect={false}
        keyBoardControl
        pauseOnHover
        minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        customTransition="all 2s"
        transitionDuration={2000}
        centerMode={true}
        itemClass="itemClass"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="w-[90%] lg:w-[60%]"
      >
       
      </Carousel> */
}
