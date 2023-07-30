import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (!ref?.current?.contains(e.target)) {
            callback();
          }
        };
    
        const timeoutId = setTimeout(() => {
          document.addEventListener("click", handleOutsideClick, false);
        }, 0);
        return () => {
          clearTimeout(timeoutId);
          document.removeEventListener("click", handleOutsideClick, false);
        };
      });
};

export default useOutsideClick;