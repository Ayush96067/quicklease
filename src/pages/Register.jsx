import styled from "styled-components";
import { Link } from "react-router-dom";
import BackArrow from "../ui/BackArrow";
import SignupForm from "../features/authentication/SignupForm";
import Signin_up_text from "../ui/Signin_up_text";

const StyledDiv = styled.div`
  max-width: 100vw;
`;

function Register() {
  return (
    <StyledDiv className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-10 p-10 text-sm md:text-2xl">
      <BackArrow />
      <h1 className="text-4xl md:text-5xl lg:text-7xl">Sign Up</h1>
      <SignupForm />
      <Signin_up_text para="Already a member?" to="/login" text="Login" />
    </StyledDiv>
  );
}
export default Register;
