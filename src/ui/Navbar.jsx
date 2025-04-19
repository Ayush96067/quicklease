import styled from "styled-components";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { BiXCircle } from "react-icons/bi";
import { StyledLink } from "./StyledContainer";
import { useState } from "react";
import { useCurrentUser } from "../features/authentication/useCurrentUser";
import Logout from "../features/authentication/UserLog";
import UserLog from "../features/authentication/UserLog";
import Spinner from "./Spinner";

const NavBar = styled.nav`
  position: fixed;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
`;

const StyledAuthLink = styled(NavLink)`
  color: #000000;
  background-color: #ffffff;
  border-radius: 50px;
  font-family: "Poppins";
  font-weight: 300;
  padding: 7px;
  transition: all ease-in 0.2s;
  &:hover {
    background-color: #bcbcbc;
  }
`;

const Login = (setDisplay) => {
  return (
    <>
      <StyledAuthLink
        onClick={() => setDisplay((o) => !o)}
        className=""
        to="login"
      >
        Login
      </StyledAuthLink>
      <StyledAuthLink
        onClick={() => setDisplay((o) => !o)}
        className=""
        to="register"
      >
        Register
      </StyledAuthLink>
    </>
  );
};

function Navbar({ display, setDisplay }) {
  const [change, setChange] = useState(false);
  const { user, isPending } = useCurrentUser();

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <NavBar
      className={`${display ? "block" : "hidden"} ${change ? "md:scale-50 md:rounded-full md:bg-[#000000b1]" : "md:bg-transparent"} z-50 h-full w-full backdrop-blur-xs transition-all duration-500 md:block md:h-auto md:md:backdrop-blur-none`}
    >
      <div
        className={`top-0 left-0 flex w-full flex-col items-center gap-10 justify-self-start bg-transparent transition-all duration-700 md:inset-auto md:flex-row md:justify-between`}
      >
        <Logo />
        <div
          className={`${change ? "md:scale-200" : "scale-100"} flex flex-col items-center gap-6 text-lg md:flex-row md:gap-4 md:text-[.8rem] lg:gap-6 lg:text-[1.4rem]`}
        >
          <StyledLink
            onClick={() => setDisplay((o) => !o)}
            className=""
            to="home"
          >
            Home
          </StyledLink>
          <StyledLink
            onClick={() => setDisplay((o) => !o)}
            className=""
            to="about"
          >
            About
          </StyledLink>
          <StyledLink
            onClick={() => setDisplay((o) => !o)}
            className=""
            to="user"
          >
            User
          </StyledLink>
          <StyledLink
            onClick={() => setDisplay((o) => !o)}
            className=""
            to="products"
          >
            Product
          </StyledLink>
          <StyledLink
            onClick={() => setDisplay((o) => !o)}
            className=""
            to="settings"
          >
            Settings
          </StyledLink>
        </div>
        <div
          className={`${change ? "md:scale-150" : "scale-100"} flex flex-col items-center gap-3 text-[.7rem] md:flex-row md:text-[.8rem] lg:text-[1.4rem]`}
        >
          {user === null ? <Login setDisplay={setDisplay} /> : <UserLog />}
        </div>
      </div>
      <BiXCircle
        className={`absolute top-4 right-5 text-2xl md:hidden`}
        onClick={() => setDisplay((open) => !open)}
      />
    </NavBar>
  );
}
export default Navbar;
