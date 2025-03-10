import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledImage = styled.img`
  transition: all ease-in-out 0.4s;

  cursor: pointer;
  &:hover {
    scale: 1.2;
  }
`;
function Logo() {
  return (
    <NavLink to="home">
      {/* Change the logo to 'QL' */}
      <StyledImage
        src="QuickLease-dark.png"
        className="rounded-full w-[7rem]"
      />
    </NavLink>
  );
}
export default Logo;
