import { BiBook, BiBookContent, BiBookOpen, BiCamera } from "react-icons/bi";
import {
  StyledContainer,
  StyledDiv,
  StyledList,
  StyledStrong,
  StyledTrandiv,
  StyledUl,
} from "../StyledContainer";
import { useInView } from "react-intersection-observer";
import { GiElectric } from "react-icons/gi";
import { MdSports } from "react-icons/md";
import { FcSportsMode } from "react-icons/fc";
import { BsMusicPlayer } from "react-icons/bs";
import { FiMusic } from "react-icons/fi";

function HowItWork() {
  const { ref: aboutSecRef, inView: aboutSecView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <StyledContainer
      ref={aboutSecRef}
      className={`min-h-[100vh] lg:min-h-[60vh] ${aboutSecView ? "translate-y-0 border-t-2 opacity-100 blur-none" : "translate-y-[60px] opacity-0 blur-3xl"} `}
    >
      <StyledDiv className="w-full gap-[2rem] md:top-40 lg:gap-[4rem]">
        <h1 className="text-4xl uppercase md:text-6xl lg:text-9xl">
          How It Works
        </h1>
        <div className="grid h-full w-full grid-cols-1 gap-10 lg:grid-cols-2">
          <StyledUl
            className={`flex flex-col gap-10 overflow-hidden text-xl font-semibold text-[#b4b4b4] md:gap-16 lg:text-3xl`}
          >
            <StyledList
              delay={0.5}
              className={`${aboutSecView ? "translate-x-0 translate-y-0 scale-100" : "translate-x-full translate-y-[10rem] scale-0"} `}
            >
              <StyledStrong className="text-2xl lg:text-5xl">
                Sign Up:
              </StyledStrong>{" "}
              Create your free account.
            </StyledList>
            <StyledList
              delay={1}
              className={`${aboutSecView ? "translate-x-0 translate-y-0 scale-100" : "translate-x-full -translate-y-[10rem] scale-0"} `}
            >
              <StyledStrong className="text-2xl text-green-600 lg:text-5xl">
                List an Item:
              </StyledStrong>{" "}
              Have something to share? List it easily.
            </StyledList>
            <StyledList
              delay={1.5}
              className={`${aboutSecView ? "translate-x-0 translate-y-0 scale-100" : "translate-x-full translate-y-[10rem] scale-0"} `}
            >
              <StyledStrong className="text-2xl text-green-600 lg:text-5xl">
                Browse & Request:
              </StyledStrong>{" "}
              Find what you need and request it.
            </StyledList>
            <StyledList
              delay={2}
              className={`${aboutSecView ? "translate-x-0 translate-y-0 scale-100" : "translate-x-full -translate-y-[10rem] scale-0"} `}
            >
              <StyledStrong className="text-2xl text-green-600 lg:text-5xl">
                Connect & Borrow:
              </StyledStrong>
              Arrange pickup, use, and return hassle-free.
            </StyledList>
          </StyledUl>
          <StyledTrandiv
            className={`${aboutSecView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} flex-col items-center gap-10 transition-transform duration-[1s] md:flex lg:text-7xl`}
          >
            <h1 className="text-center text-3xl uppercase md:text-4xl lg:text-5xl">
              Featured Categories
            </h1>
            <StyledUl className="flex flex-col gap-7 text-xl md:text-3xl lg:text-4xl">
              <StyledList className="flex items-center gap-3">
                <BiBookOpen className="text-[#bfff00]" /> Books
              </StyledList>

              <StyledList className="flex items-center gap-3">
                <GiElectric className="text-[#bfff00]" /> Electronics
              </StyledList>

              <StyledList className="flex items-center gap-3">
                <FcSportsMode className="text-[#bfff00]" /> Outdoor & Sports
                Gear
              </StyledList>

              <StyledList className="flex items-center gap-3">
                <FiMusic className="text-[#bfff00]" /> Musical Instruments
              </StyledList>

              <StyledList className="flex items-center gap-3">
                <BiCamera className="text-[#bfff00]" /> Camera & Accessories
              </StyledList>
            </StyledUl>
          </StyledTrandiv>
        </div>
      </StyledDiv>
    </StyledContainer>
  );
}
export default HowItWork;
