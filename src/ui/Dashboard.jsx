import { useEffect, useState } from "react";
import styled from "styled-components";
import "animate.css";

const StyledPara1 = styled.p`
  background-image: linear-gradient(to right, #7226ff, #f042ff, #ffe5f1);
  color: transparent;
  background-clip: text;
`;
const StyledPara2 = styled.p`
  background-image: linear-gradient(to right, #ffe5f1, #f042ff, #7226ff);
  color: transparent;
  background-clip: text;
`;

const StyledHead = styled.h1`
  letter-spacing: 1.4rem;
  background-image: linear-gradient(to right, #4b4b4b, white, #3b3b3b);
  color: transparent;
  background-clip: text;
`;

const StyledContainer = styled.div`
  width: 100%;

  background: repeating-linear-gradient(
    90deg,
    #000000,
    #070606 10px,
    #000000 10px,
    #33333361 20px
  );
`;

function Dashboard() {
  const [display, setDisplay] = useState(false);
  useEffect(function () {
    setTimeout(() => {
      setDisplay(true);
    }, 2000);
  }, []);

  return (
    <StyledContainer className="flex h-[100vh] w-full items-center justify-center">
      <div
        className={`animate-fade-left animate-once animate-duration-[800ms] flex flex-col text-center transition-all duration-[1s]`}
      >
        <StyledHead
          className={`animate-fade-left animate-once animate-duration-[800ms] font-['Big_Shoulders_Inline'] text-4xl md:text-[6rem] lg:text-[10rem]`}
        >
          Quick Lease
        </StyledHead>
        <StyledPara1 className="animate-flip-down animate-once animate-delay-[800ms] animate-duration-[800ms] text-3xl md:text-5xl lg:text-8xl">
          <span>Borrow</span> what you <span>need</span>
        </StyledPara1>
        <StyledPara2 className="animate-flip-up animate-once animate-delay-[1100ms] animate-duration-[800ms] text-[1.5rem] md:text-4xl lg:text-7xl">
          <span>Share</span> what you <span>Can</span>
        </StyledPara2>
      </div>
    </StyledContainer>
  );
}
export default Dashboard;
