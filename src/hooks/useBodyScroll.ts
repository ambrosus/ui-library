import { useEffect } from 'react';

/**
 * `useLockBodyScroll` is a hook to lock the scrolling of the body, typically used in modals and overlays.
 * It prevents the background content from scrolling when the modal or overlay is active.
 *
 * @param lock - (Optional) A boolean indicating whether to lock the body scroll. Defaults to true.
 */

function useLockBodyScroll(lock: boolean = true) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleResize = () => {
      if (window.innerWidth > 1100) {
        document.body.style.overflow = '';
        return;
      }

      if (lock) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [lock]);
}

export default useLockBodyScroll;
