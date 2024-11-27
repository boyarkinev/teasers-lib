import { FC } from 'react';

import { IconProps } from '../../../ts';

export const Song: FC<IconProps> = ({ size, fill, stroke }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={fill ?? 'none'}
      stroke={stroke ?? 'none'}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-music'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
      <path d='M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
      <path d='M9 17v-13h10v13' />
      <path d='M9 8h10' />
    </svg>
  );
};
