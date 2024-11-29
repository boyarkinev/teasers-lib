import './PlayControl.css';

import { FC } from 'react';

import { MovieSVG } from '@/shared/assets';
import { useAutoPlayNext, usePause } from '@/shared/lib';

type PlayControlProps = {
  mediaTag: 'audio' | 'video';
  src: string;
};

export const PlayControl: FC<PlayControlProps> = ({ mediaTag, src }) => {
  usePause(mediaTag);
  useAutoPlayNext(mediaTag);

  return mediaTag === 'audio' ? (
    <audio className='app-audio-control' controls src={src} />
  ) : (
    <video className='app-video-control' controls poster={MovieSVG} src={src} />
  );
};
