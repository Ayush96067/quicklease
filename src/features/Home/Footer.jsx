import { NavLink } from "react-router-dom";
import { StyledContainer, StyledLink } from "../../ui/StyledContainer";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaX, FaXTwitter } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";

function Footer() {
  return (
    <StyledContainer className="flex min-h-[30vh] flex-col items-center justify-center gap-10 bg-[#040038]">
      <div className="grid grid-cols-1 place-content-center gap-[10rem] self-center md:grid-cols-2">
        <nav className="hidden flex-col gap-10 text-xl md:flex md:text-2xl lg:text-3xl">
          <StyledLink className="w-fit" to="/home">
            Home
          </StyledLink>
          <StyledLink className="w-fit" to="/about">
            About
          </StyledLink>
          <StyledLink className="w-fit" to="/user">
            {" "}
            User
          </StyledLink>
          <StyledLink className="w-fit" to="/products">
            Products
          </StyledLink>
          <StyledLink className="w-fit" to="/settings">
            Settings
          </StyledLink>
        </nav>

        <div className="flex flex-col items-center gap-7 text-xl md:text-2xl lg:text-3xl">
          <p className="text-2xl md:text-4xl lg:text-6xl">Follow us on:</p>
          <div className="grid grid-cols-2 gap-10 place-self-stretch transition-all duration-1000 md:flex-row">
            <BsInstagram className="cursor-pointer text-3xl transition-all duration-400 hover:text-[#a4a4a4] md:text-4xl lg:text-6xl" />
            <FaXTwitter className="cursor-pointer text-3xl transition-all duration-400 hover:text-[#a4a4a4] md:text-4xl lg:text-6xl" />
            <LiaLinkedin className="cursor-pointer text-3xl transition-all duration-400 hover:text-[#a4a4a4] md:text-4xl lg:text-6xl" />
            <FaFacebook className="cursor-pointer text-3xl transition-all duration-400 hover:text-[#a4a4a4] md:text-4xl lg:text-6xl" />
          </div>
        </div>
      </div>
      <p className="lg:text-2xl">
        &copy; 2025 QuickLease. All rights reserved.
      </p>
    </StyledContainer>
  );
}
export default Footer;
