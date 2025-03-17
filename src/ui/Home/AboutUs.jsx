import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";
import { StyledContainer, StyledDiv } from "../StyledContainer";

const StyledPara = styled.div`
  line-height: 2em;
  color: #919090;
  box-shadow: 1px 1px 10px 2px green;
  padding: 1rem;
  border-radius: 16px;
  transition: all 1s;
  ${(props) =>
    props.index === 1 &&
    css`
      transition-delay: 1s;
    `}

  ${(props) =>
    props.index === 2 &&
    css`
      transition-delay: 1.5s;
    `}

    ${(props) =>
    props.index === 3 &&
    css`
      transition-delay: 2s;
    `}
`;

const StyledUL = styled.ul`
  padding: 1em;
`;

const StyledHead = styled.h1`
  color: #28f100;
  text-shadow:
    0 0 10px #28f100,
    0 0 20px #28f100,
    0 0 30px #28f100,
    0 0 40px #28f100,
    0 0 50px #28f100,
    0 0 60px #28f100,
    0 0 70px #28f100;
`;

function AboutUs() {
  const { ref: aboutSecRef, inView: aboutSecView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <StyledContainer
      ref={aboutSecRef}
      className={`min-h-[150vh] lg:min-h-[90vh] ${aboutSecView ? "translate-y-0 border-t-2 opacity-100 blur-none" : "translate-y-[60px] opacity-0 blur-3xl"} `}
    >
      <StyledDiv className="top-10 w-full gap-6 md:top-40">
        <h1 className="text-4xl uppercase md:text-6xl lg:text-9xl">About us</h1>
        <div className="flex w-[90%] flex-col items-center justify-center gap-6 text-xl leading-10 md:flex-row md:items-stretch md:text-xl lg:text-4xl">
          <StyledPara
            className={` ${aboutSecView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 blur-3xl"} w-[80%] lg:leading-32`}
            index={1}
          >
            <StyledHead>NEED</StyledHead>
            People often buy things they need only temporarily, leading to
            unnecessary expenses and waste. QuickLease is here to change that!
          </StyledPara>
          <StyledPara
            index={2}
            className={`${aboutSecView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 blur-3xl"} w-[80%] lg:leading-36`}
          >
            <StyledHead>WHY US</StyledHead>

            <StyledUL className="list-disc">
              <li className="">
                Whether it’s a camera for a weekend trip, power tools for a DIY.
              </li>
              <li>Project, or books for a semester,</li>
              QuickLease connects people with those who have the items they
              need.
            </StyledUL>
          </StyledPara>
          <StyledPara
            index={3}
            className={`${aboutSecView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 blur-3xl"} w-[80%] lg:leading-36`}
          >
            <StyledHead>OUR MISSON</StyledHead>
            To promote sustainability, reduce waste, and build a trusted sharing
            economy where users can lend, borrow, and save money effortlessly.
          </StyledPara>
        </div>
      </StyledDiv>
    </StyledContainer>
  );
}
export default AboutUs;
