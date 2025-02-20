import { useState, useEffect } from 'react';
import { useWindowSize } from './useWindowSize';

export const useIsMobilePlatform = (breakpoint = 1024) => {
  const { width } = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAdaptive, setIsAdaptive] = useState(false);

  useEffect(() => {
    if (width <= breakpoint && !isAdaptive) {
      setIsAdaptive(true);
    } else if (width > breakpoint && isAdaptive) {
      setIsAdaptive(false);
    }
  }, [breakpoint, isAdaptive, width]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      setIsMobile(true);
      setIsAndroid(true);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (/iPad|iPhone|iPod/.test(userAgent) && !window?.MSStream) {
      setIsMobile(true);
      setIsIOS(true);
    }
  }, []);

  return { isMobile, isAndroid, isIOS, isAdaptive };
};

export default useIsMobilePlatform;
