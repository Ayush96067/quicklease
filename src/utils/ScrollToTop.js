import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(
    function () {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "instant",
      });
    },
    [pathname],
  );
  return null;
}
