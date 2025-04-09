import styled from "styled-components";
import Hero from "../features/about/Hero";
import HeroSec2 from "../features/about/HeroSec2";

const FixedBg = styled.div`
  /* background-image: url("./about_poster.png"); */
  min-height: 100vh;
  background-attachment: fixed;
  /* background-position: top; */
  background-repeat: no-repeat;
  background-size: cover;
`;

// function About() {
//   return (
//     <div>
//       <Hero />
//       <FixedBg className="bg-[url(./img11.jpg)] bg-center lg:bg-top">
//         <div className="h-[100vh] w-full">hello</div>
//       </FixedBg>
//       <HeroSec2 />
//       <FixedBg className="bg-[url(./img11.jpg)] bg-center">
//         <div className="h-[100vh] w-full">hello</div>
//       </FixedBg>
//       <HeroSec2 />
//     </div>
//   );
// }

function About() {
  return <div>About</div>;
}
export default About;
