import styled from "styled-components";
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
  background: repeating-linear-gradient(
    -55deg,
    #000000,
    #070606 10px,
    #000000 10px,
    #33333361 20px
  );
  width: 100%;
`;

function Dashboard() {
  return (
    <StyledContainer className="h-[100vh] w-full flex justify-center items-center ">
      <div className="flex flex-col text-center text-8xl">
        <StyledHead className=" text-9xl font-['Big_Shoulders_Inline']">
          Quick Lease
        </StyledHead>
        <StyledPara1>
          <span>Borrow</span> what you <span>need</span>
        </StyledPara1>
        <StyledPara2>
          <span>Share</span> what you <span>Can</span>
        </StyledPara2>
      </div>
    </StyledContainer>
  );
}
export default Dashboard;
