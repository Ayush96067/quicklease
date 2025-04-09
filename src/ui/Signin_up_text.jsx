import { Link } from "react-router-dom";
function Signin_up_text({ para, to, text }) {
  return (
    <p>
      {para}{" "}
      <Link className="font-extrabold text-[#bfff00]" to={to}>
        {text}
      </Link>
    </p>
  );
}
export default Signin_up_text;
