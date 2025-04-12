import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollPageToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollPageToTop;
