import { useInView } from "react-intersection-observer";
import { StyledButton, StyledContainer, StyledList } from "../StyledContainer";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  /* justify-content: center; */

  flex-direction: column;
  gap: 1rem;
`;
function ContactSec() {
  const { ref: aboutSecRef, inView: aboutSecView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <StyledContainer
      ref={aboutSecRef}
      className={` ${aboutSecView ? "translate-y-0 opacity-100 blur-none" : "translate-y-[60px] opacity-0 blur-3xl"} main grid min-h-[100vh] w-full grid-cols-1 flex-col place-content-center gap-[4rem] lg:grid-cols-2`}
    >
      <StyledDiv className="text-xl leading-[2rem] text-[#b4b4b4] md:text-2xl md:leading-[3rem] lg:text-3xl lg:leading-[4rem]">
        <h1 className="text-3xl text-white md:text-4xl lg:text-6xl">
          Join QuickLease Today
        </h1>
        <p>
          Why buy when you can borrow? QuickLease connects you with a trusted
          community where you can share, rent, or borrow items hassle-free. Save
          money, reduce waste, and make the most of your resources.
        </p>
        <ul className="flex w-fit cursor-pointer flex-col gap-2 md:gap-6">
          <StyledList className="w-full rounded-2xl border border-[#bfff00] hover:bg-[#bfff00] hover:text-black">
            ✔ Borrow items for free or at a low cost
          </StyledList>
          <StyledList className="w-full rounded-2xl border border-[#bfff00] hover:bg-[#bfff00] hover:text-black">
            ✔ Earn by renting out your unused items
          </StyledList>
          <StyledList className="w-full rounded-2xl border border-[#bfff00] hover:bg-[#bfff00] hover:text-black">
            ✔ Build a sustainable and sharing community
          </StyledList>
        </ul>
        <p>Sign up now and start your borrowing journey!</p>
        <StyledButton to="/register" className="w-fit">
          Sign Up
        </StyledButton>
      </StyledDiv>

      <StyledDiv className="flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl">Contact us</h1>
        <form action="">
          <label htmlFor=""></label>
        </form>
      </StyledDiv>
    </StyledContainer>
  );
}
export default ContactSec;
