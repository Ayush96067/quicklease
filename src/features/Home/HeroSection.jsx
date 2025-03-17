import styled, { css } from "styled-components";
import "animate.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const StyledContainer = styled.div`
  padding: 1rem;
  transition: all 0.5s;
`;
const StyledContent = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  padding: 3rem;
`;
const StyledUl = styled.ul`
  transition: all 1s;
  color: #919090;
`;

const StyledList = styled.li`
  transition: all 1.7s;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    /* background: linear-gradient(to right, #f3f3f35f 60%, #070707); */
    background-color: #fdfdfdfa;
    color: gray;
  }
`;

const INTRO = "Welcome to QuickLease";

function HeroSection() {
  const { ref: aboutSecRef, inView: aboutSecView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <StyledContainer
      ref={aboutSecRef}
      className={`${aboutSecView ? "translate-y-0 border-t-2 opacity-100" : "translate-y-[30px] opacity-0"} grid min-h-[60vh] w-full grid-cols-none grid-rows-[auto_1fr] md:grid-cols-[35%_auto] md:grid-rows-none`}
    >
      <StyledContent
        className={`flex items-center gap-2 text-[1.5rem] font-extrabold uppercase md:gap-[2rem] md:text-6xl lg:gap-[10rem] lg:text-9xl`}
      >
        {INTRO.split(" ").map((words, index) => (
          <p
            className="flex w-full flex-row justify-center md:flex-col"
            key={index}
          >
            {words.split("").map((word, index) => (
              <span
                key={index}
                className={`${aboutSecView ? "flex" : "hidden"} ${index % 2 == 0 ? "animate__bounceInDown" : "animate__bounceInUp"} animate-once animate-duration-[2s]`}
              >
                {word}
              </span>
            ))}
          </p>
        ))}
      </StyledContent>
      <div className="relative top-10 flex w-full flex-col items-center gap-6 overflow-hidden md:items-center md:justify-center">
        <h1
          className={`${aboutSecRef ? "animate__zoomInDown" : "hidden animate-none"} animate-once animate-duration-[2s] font-extrabold md:text-[2.5rem] lg:text-8xl`}
        >
          Why buy
        </h1>
        <StyledUl className={`text-xl md:text-5xl lg:text-9xl`}>
          <StyledList
            className={`${aboutSecView ? "translate-x-0 border-t-2" : "translate-x-full"} transition-all duration-[2s]`}
          >
            When you can borrow?
          </StyledList>
          <StyledList
            className={` ${aboutSecView ? "translate-x-0 border-t-2" : "-translate-x-full"} transition-all duration-1000`}
          >
            Access items you need,
          </StyledList>
          <StyledList
            className={` ${aboutSecView ? "translate-x-0 border-t-2" : "translate-x-full"} transition-all duration-1000`}
          >
            Share what you have,
          </StyledList>
          <StyledList
            className={` ${aboutSecView ? "translate-x-0 border-y-2" : "-translate-x-full"} transition-all duration-1000`}
          >
            And build a community of trust.
          </StyledList>
        </StyledUl>
      </div>
    </StyledContainer>
  );
}
export default HeroSection;
