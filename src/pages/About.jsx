import styled from "styled-components";
import Hero from "../features/about/Hero";
import HeroSec2 from "../features/about/HeroSec2";

const FixedBg = styled.div`
  background-image: url("./img11.jpg");
  min-height: 100vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

function About() {
  return (
    <div className="p-10 lg:p-5">
      <Hero />
      <FixedBg className="bg-center lg:bg-top">
        {/* <div className="h-[100vh] w-full">hello</div> */}
      </FixedBg>
      <HeroSec2 />
      <FixedBg className="bg-center">
        <div className="h-[100vh] w-full">hello</div>
      </FixedBg>
      <HeroSec2 />
    </div>
  );
}

export default About;
