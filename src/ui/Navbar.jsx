import styled from "styled-components";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { BiXCircle } from "react-icons/bi";

const NavBar = styled.nav`
  position: fixed;
  padding: 1rem;
`;

const StyledLink = styled(NavLink)`
  color: #ffffff;
  font-family: "Roboto";
  text-transform: uppercase;
  transition: all 0.3s;
  position: relative;
  font-weight: 500;

  &:hover {
    color: #00d2d2;
  }

  &.active:link,
  &.active:visited {
    color: #00d2d2;
  }

  &::after {
    content: "";
    width: 0%;
    position: absolute;
    left: 50%;
    bottom: 1px;
    transition: all 0.3s;

    border-width: 0 0 1px;
    border-style: solid;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }

  &.active::after {
    width: 100%;
    left: 0;
  }
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

function Navbar({ display, setDisplay }) {
  return (
    <NavBar
      className={`${display ? "block" : "hidden"} z-50 h-full w-full backdrop-blur-xs transition-all duration-500 md:block md:h-auto md:bg-black/50 md:backdrop-blur-none`}
    >
      <div
        className={`top-0 left-0 flex w-full flex-col items-center gap-10 justify-self-start bg-transparent transition-all duration-700 md:inset-auto md:flex-row md:justify-between`}
      >
        <Logo />
        <div
          className={`flex flex-col items-center gap-6 text-lg md:flex-row md:gap-4 md:text-[.8rem] lg:gap-6 lg:text-[1.4rem]`}
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
          className={`flex flex-col items-center gap-3 text-[.7rem] md:flex-row md:text-[.8rem] lg:text-[1.4rem]`}
        >
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
            to="login"
          >
            Register
          </StyledAuthLink>
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
