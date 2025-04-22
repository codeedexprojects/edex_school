import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// for scrolltotop or refreshing

const Scroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;                   
};     

export default Scroll;
