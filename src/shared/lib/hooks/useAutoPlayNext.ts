import { useEffect } from 'react';

/**
 * Hook. Запускает автоматическое воспроизведение
 * @name useAutoPlayNext
 * @layout shared/lib/hooks
 * @param mediaTag
 */
export const useAutoPlayNext = (mediaTag: 'audio' | 'video') => {
  useEffect(() => {
    const audiosList = document.querySelectorAll(mediaTag);
    const nextAudioPlay = (e: Event) => {
      for (let i = 0, len = audiosList.length; i < len; i++) {
        if (audiosList[i] === e.target && audiosList[i].ended) {
          audiosList[i + 1].play();
        }
      }
    };
    addEventListener('ended', nextAudioPlay, true);
    return () => removeEventListener('play', nextAudioPlay);
  });
};
