import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function RouteChangeFocus() {
  const { pathname } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    const main = document.getElementById("main");
    if (main) {
      main.focus({ preventScroll: true });
    }
  }, [pathname]);

  return null;
}
