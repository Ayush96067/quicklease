import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function BackArrow() {
  const navigate = useNavigate();

  return (
    <BiArrowBack
      onClick={() => navigate("/home", { replace: true })}
      className="absolute top-5 left-2 cursor-pointer rounded-full bg-white text-3xl text-black transition-transform duration-500 hover:rotate-[0deg] hover:bg-gray-200 md:top-10 md:p-3 lg:rotate-[-30deg] lg:text-7xl"
    />
  );
}
export default BackArrow;
