import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
const StyledAppLayout = styled.div`
  display: flex;
  justify-content: center;
`;
function Applayout() {
  return (
    <StyledAppLayout>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </StyledAppLayout>
  );
}
export default Applayout;
