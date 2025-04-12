import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Signin_up_text from "../ui/Signin_up_text";
import BackArrow from "../ui/BackArrow";
import supabase from "../services/supabase";
import toast from "react-hot-toast";
import { Button } from "../ui/Button";

const StyledDiv = styled.div`
  max-width: 100vw;
`;

function Login() {
  return (
    <StyledDiv className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-10 p-10 text-sm md:text-2xl">
      <BackArrow />
      <h1 className="text-4xl md:text-5xl lg:text-7xl">
        <span className="text-orange-500">Login </span> to your{" "}
        <span className="text-green-400">Account </span>
      </h1>
      <LoginForm />
      <Signin_up_text para={"Not a member"} to={"/register"} text="Register" />
      <Button>Forget Password</Button>
    </StyledDiv>
  );
}
export default Login;
