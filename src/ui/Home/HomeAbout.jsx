import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const StyledAbout = styled.div`
  min-height: 100vh;
`;
const StyledAboutSection = styled.div`
  min-height: 100vh;
  padding: 3rem;
  transition: all 1s;
`;
const StyledPara = styled.p`
  font-family: "Poppins";
  text-align: center;
  background-image: linear-gradient(
    to right,
    #aeaeae,
    rgb(109, 109, 109),
    #ffffff
  );
  background-clip: text;
  color: transparent;
`;

const StyledContent = styled.div`
  padding: 2rem;
  background-color: #000000;
  border-radius: 24px;
  box-shadow: 1px 1px 20px 2px #ffffff;
`;
function HomeAbout() {
  //   document.addEventListener("DOMContentLoaded", function () {});

  const { ref: aboutSecRef, inView: aboutSecView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <StyledAbout ref={aboutSecRef}>
      <StyledAboutSection
        className={`transition-all duration-1000 ${aboutSecView ? "translate-x-0 border-t border-white" : "translate-x-full"} grid w-full grid-rows-[auto_1fr] gap-6 place-self-center overflow-hidden md:grid-cols-[60%_auto] md:grid-rows-1`}
      >
        <div className="order-2 flex h-full w-full flex-col items-center md:order-1 md:justify-center">
          <StyledContent className="flex flex-col gap-2 text-3xl font-semibold md:gap-[3rem] lg:gap-[10rem] lg:text-8xl">
            <StyledPara className="tracking-[.5rem] md:tracking-[1.3rem]">
              Borrow with TRUST
            </StyledPara>
            <StyledPara className="text-center tracking-[.5rem] md:tracking-[1.3rem]">
              And
            </StyledPara>
            <StyledPara className="tracking-[.5rem] md:tracking-[1.3rem]">
              Share with EASE
            </StyledPara>
          </StyledContent>
          <div className="grid w-full grid-cols-2"></div>
        </div>
        <div className="order-1 flex h-full w-full items-center justify-center">
          <img
            src="./public/QuickLease_light.png"
            alt="image of logo"
            className="md:w- w-[100%] rounded-2xl border-6 border-blue-400 lg:w-[80%]"
          />
        </div>
      </StyledAboutSection>
    </StyledAbout>
  );
}
export default HomeAbout;
