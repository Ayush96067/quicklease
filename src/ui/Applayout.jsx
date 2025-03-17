import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { MdMenuOpen } from "react-icons/md";
import { useState } from "react";
import Footer from "../features/Home/Footer";
const StyledAppLayout = styled.div`
  /* display: flex; */
  max-width: 100vw;
  min-height: 100vh;
`;
function Applayout() {
  const [display, setDisplay] = useState(false);
  return (
    <StyledAppLayout className="">
      <MdMenuOpen
        onClick={() => setDisplay((open) => !open)}
        className={`fixed left-0 z-50 m-3 text-3xl md:hidden`}
      />
      <Navbar setDisplay={setDisplay} display={display} />
      <Outlet />
      <Footer />
    </StyledAppLayout>
  );
}
export default Applayout;
