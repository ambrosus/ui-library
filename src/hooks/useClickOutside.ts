import { useEffect, useCallback, RefObject } from 'react';

const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  isOpen: boolean,
): void => {
  const handleClick = useCallback(
    (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClick);
      }, 0);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen, handleClick]);
};

export default useOutsideClick;
