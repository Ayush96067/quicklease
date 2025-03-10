import styled from "styled-components";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";

const NavBar = styled.nav`
  position: fixed;
  padding: 2rem;
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
`;

const StyledAuthLink = styled(NavLink)`
  color: #000000;
  background-color: #ffffff;
  border-radius: 50px;
  font-size: 1.2rem;
  font-family: "Poppins";
  font-weight: 300;
  padding: 0.5rem;
  transition: all ease-in 0.3s;
  &:hover {
    background-color: #d7d7d7;
  }
`;

function Navbar() {
  return (
    <NavBar className=" bg-transparent w-full flex justify-between">
      <Logo />
      <div className="flex items-center gap-6">
        <StyledLink className="text-xl" to="home">
          Home
        </StyledLink>
        <StyledLink className="text-xl" to="about">
          About
        </StyledLink>
        <StyledLink className="text-xl" to="user">
          User
        </StyledLink>
        <StyledLink className="text-xl" to="products">
          Product
        </StyledLink>
        <StyledLink className="text-xl" to="settings">
          Settings
        </StyledLink>
      </div>
      <div className="flex items-center gap-3">
        <StyledAuthLink to="login">Login</StyledAuthLink>
        <StyledAuthLink to="login">Register</StyledAuthLink>
      </div>
    </NavBar>
  );
}
export default Navbar;
