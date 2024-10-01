import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouterToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default RouterToTop;
