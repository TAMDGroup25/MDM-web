import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Solo scroll al top si no hay state personalizado
    const state = location.state as { scrollToId?: string; scrollToTop?: boolean } | undefined;
    if (!state?.scrollToId && !state?.scrollToTop) {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.state]);

  return null;
};

export default ScrollToTop;
