import { useInView } from "react-intersection-observer";

import styled from "styled-components";
import {
  StyledButton,
  StyledContainer,
  StyledList,
} from "../../ui/StyledContainer";

const StyledDiv = styled.div`
  display: flex;
  /* justify-content: center; */
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 1px 1px 10px white;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInput = styled.input`
  border: 1px solid #bfff00;
  flex-grow: 1;
  background-color: transparent;
  &:focus {
    outline: none;
    background-color: #212121;
  }
  &:hover {
    background-color: #212121;
  }
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 100px;
`;

const Form = styled.form`
  padding: 20px;
  height: 100%;
  margin: 50px auto;
`;

function ContactSec() {
  const { ref: aboutSecRef, inView: aboutSecView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <StyledContainer
      ref={aboutSecRef}
      className={` ${aboutSecView ? "translate-y-0 opacity-100 blur-none" : "translate-y-[60px] opacity-0 blur-3xl"} main grid min-h-[100vh] w-full grid-cols-1 flex-col place-content-center gap-[4rem] lg:grid-cols-[5%_60%_25%_5%]`}
    >
      <div></div>
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
          <StyledList className="w-full rounded-2xl border border-[#bfff00] px-2 py-1 hover:bg-[#bfff00] hover:text-black">
            ✔ Borrow items for free or at a low cost
          </StyledList>
          <StyledList className="w-full rounded-2xl border border-[#bfff00] px-2 py-1 hover:bg-[#bfff00] hover:text-black">
            ✔ Earn by renting out your unused items
          </StyledList>
          <StyledList className="w-full rounded-2xl border border-[#bfff00] px-2 py-1 hover:bg-[#bfff00] hover:text-black">
            ✔ Build a sustainable and sharing community
          </StyledList>
        </ul>
        <p>Sign up now and start your borrowing journey!</p>
        <StyledButton to="/register" className="w-fit">
          Sign Up
        </StyledButton>
      </StyledDiv>

      <StyledDiv className="flex flex-col items-center border">
        <h1 className="text-2xl md:text-4xl lg:text-6xl">Contact us</h1>
        <Form action="" className="flex w-full max-w-[500px] flex-col gap-10">
          <FormRow className="flex w-full items-center justify-between gap-6">
            <Label className="text-xl md:text-2xl lg:text-3xl" htmlFor="name">
              Name
            </Label>
            <StyledInput
              id="name"
              className="md:textxl w-full rounded-[5px] bg-transparent px-4 py-2 text-lg focus:outline-none lg:text-2xl"
            />
          </FormRow>
          <FormRow className="flex items-center justify-between gap-6">
            <Label className="text-xl md:text-2xl lg:text-3xl" htmlFor="email">
              Email
            </Label>
            <StyledInput
              id="email"
              className="md:textxl w-full rounded-[5px] bg-transparent px-4 py-2 text-lg lg:text-2xl"
            />
          </FormRow>
          <FormRow className="flex items-center justify-between gap-6">
            <Label className="text-xl md:text-2xl lg:text-3xl" htmlFor="phone">
              Phone
            </Label>
            <StyledInput
              id="phone"
              className="md:textxl w-full rounded-[5px] bg-transparent px-4 py-2 text-lg lg:text-2xl"
            />
          </FormRow>

          <FormRow className="flex items-center justify-between gap-6">
            <Label className="text-xl md:text-2xl lg:text-3xl" htmlFor="query">
              Query
            </Label>
            <textarea
              id="query"
              className="h-[10rem] w-full rounded-[5px] border border-[#bfff00] bg-transparent px-4 py-2 hover:bg-[#212121] focus:outline-none"
            />
          </FormRow>
        </Form>
      </StyledDiv>
      <div></div>
    </StyledContainer>
  );
}
export default ContactSec;
