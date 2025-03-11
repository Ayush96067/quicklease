import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { MdMenuOpen } from "react-icons/md";
import { useState } from "react";
const StyledAppLayout = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
function Applayout() {
  const [display, setDisplay] = useState(false);
  return (
    <StyledAppLayout>
      <MdMenuOpen
        onClick={() => setDisplay((open) => !open)}
        className={`fixed left-0 m-3 text-3xl md:hidden`}
      />
      <Navbar setDisplay={setDisplay} display={display} />
      <div className="w-full">
        <Outlet />
      </div>
    </StyledAppLayout>
  );
}
export default Applayout;
