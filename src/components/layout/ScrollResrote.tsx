import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestore(){
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo({
    top:0,
    behavior:"smooth"
  });
  }, [pathname]);
  return null
}

