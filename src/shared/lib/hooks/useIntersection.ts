import { useCallback, useRef } from 'react';

/**
 * Hook. Для работы с бесконечно загрузкой
 * @name useIntersection
 * @layer shared/lib/hooks
 * @param {void} onIntersect
 */
export const useIntersection = (onIntersect: () => void) => {
  const unsubscribe = useRef(() => {});

  return useCallback((el: HTMLDivElement | null) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((intersection) => {
        if (intersection.isIntersecting) {
          onIntersect();
        }
      });
    });
    if (el) {
      observer.observe(el);
      unsubscribe.current = () => observer.disconnect();
    } else {
      unsubscribe.current();
    }
  }, []);
};
