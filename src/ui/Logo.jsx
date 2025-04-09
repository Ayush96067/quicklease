import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledImage = styled.img`
  transition: all ease-in-out 0.4s;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
`;
function Logo() {
  return (
    <NavLink to="home ">
      {/* Change the logo to 'QL' */}
      <StyledImage
        src="QuickLease-dark.png"
        className="w-[10rem] rounded-full"
      />
    </NavLink>
  );
}
export default Logo;
