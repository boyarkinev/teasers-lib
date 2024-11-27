import { useEffect } from 'react';

/**
 * Hook. Останавливает воспроизведение
 * @name usePause
 * @layout shared/lib/hooks
 * @param mediaTag
 */
export const usePause = (mediaTag: 'audio' | 'video') => {
  useEffect(() => {
    const audiosList = document.querySelectorAll(mediaTag);
    const prevAudioPaused = (e: Event) => {
      for (let i = 0, len = audiosList.length; i < len; i++) {
        if (audiosList[i] !== e.target) {
          audiosList[i].pause();
        }
      }
    };
    addEventListener('play', prevAudioPaused, true);
    return () => removeEventListener('play', prevAudioPaused);
  }, []);
};
